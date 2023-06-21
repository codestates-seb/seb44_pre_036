import { UseQueryResult, useQuery } from 'react-query';
import axios from 'axios';
import { ACCESS_TOKEN } from '../constants';
import { useDispatch } from 'react-redux';
import { createUserInfo } from '../../store/UserInfoStore';
import { IUserInfo } from '../../model/UserInfo';
import { IGetMeResponseData } from '../../model/GetMeResponseData';
import { MembershipUrl } from '../enum';

function useGetMe(): UseQueryResult<IUserInfo | null> {
  const dispatch = useDispatch();
  // const getMe = async (): Promise<IUserInfo | null> => {
  const getMe = async () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    console.log('localstorage에서 받아온 accessToken', accessToken);
    if (!accessToken) {
      return null;
    }

    try {
      const response = await axios.get(MembershipUrl.GetMe, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        // 이 옵션은 쿠키를 서버와 주고받을 수 있게 해준다. (HTTP only 쿠키로 설정된 refresh token 자동 전송)
        // withCredentials: true,
      });

      // const responseData: IGetMeResponseData = response.data;
      // const responseData = response.data;
      console.log('준기님께 계정 정보 전달 후 받아온 데이터', response);

      //   console.log('준기님께 계정 정보 전달 후 받아온 데이터', responseData);

      //   if (!responseData.user) {
      //     return null;
      //   }

      //   accessToken이 만료되었을 경우 재발급
      //   if (responseData.accessToken) {
      //     localStorage.removeItem(ACCESS_TOKEN);
      //     localStorage.setItem(ACCESS_TOKEN, responseData.accessToken);
      //   }
      //   const userInfo: IUserInfo = responseData.user;
      //   dispatch(createUserInfo(userInfo));
      //   return userInfo;
    } catch (error: any) {
      // refresh token 만료 시 로그아웃 처리
      if (error.response.status === 401) {
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
