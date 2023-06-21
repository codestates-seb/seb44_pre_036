import { UseQueryResult, useQuery } from 'react-query';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { ACCESS_TOKEN } from '../constants';
import { useDispatch } from 'react-redux';
import { createUserInfo } from '../../store/UserInfoStore';
import { IUserInfo } from '../../model/UserInfo';
import { MembershipUrl } from '../enum';

const secretKey = import.meta.env.VITE_SECRET_KEY;

// Encrypt the access token
const encryptToken = (tokenToEncrypt: string) => {
  return CryptoJS.AES.encrypt(tokenToEncrypt, secretKey).toString();
};

// Decrypt the access token
const decryptToken = (encryptedToken: string) => {
  const bytes = CryptoJS.AES.decrypt(encryptedToken, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

function useGetMe(): UseQueryResult<IUserInfo | null> {
  const dispatch = useDispatch();
  const getMe = async (): Promise<IUserInfo | null | undefined> => {
    const encryptedAccessToken = localStorage.getItem(ACCESS_TOKEN);

    if (!encryptedAccessToken) {
      return null;
    }

    const accessToken = decryptToken(encryptedAccessToken);

    const headers = {
      'ngrok-skip-browser-warning': 'true',
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      const response = await axios.get(MembershipUrl.GetMe, {
        headers,
        withCredentials: true,
      });

      const userData: IUserInfo = response.data;

      if (!userData || !response?.headers.authorization) {
        return null;
      }

      dispatch(createUserInfo(userData));

      //   accessToken이 만료되었을 경우 재발급
      const newAccessToken = response.headers.authorization.split(' ')[1];
      if (newAccessToken) {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.setItem(ACCESS_TOKEN, encryptToken(newAccessToken));
      }

      return userData;
    } catch (error: any) {
      // refresh token 만료 시 로그아웃 처리
      if (error?.response?.status === 401) {
        localStorage.removeItem(ACCESS_TOKEN);
      } else {
        console.error(error);
      }

      return null;
    }
  };

  return useQuery('me', getMe, {
    staleTime: 5 * 60 * 1000, // 5분동안 데이터가 신선하다고 간주
    cacheTime: 30 * 60 * 1000, // 30분동안 캐시를 유지
  });
}
export default useGetMe;
