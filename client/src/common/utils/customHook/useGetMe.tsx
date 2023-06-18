import { UseQueryResult, useQuery } from 'react-query';
import axios from 'axios';
import { ACCESS_TOKEN, GET_ME_URL_EXAMPLE } from '../constants';
import { useDispatch } from 'react-redux';
import { createUserInfo } from '../../store/UserInfoStore';
import { IUserInfo } from '../../model/UserInfo';

export interface IGetMeResponseData {
  user?: IUserInfo | null;
  accessToken?: string;
}

function useGetMe(): UseQueryResult<IUserInfo | null> {
  const dispatch = useDispatch();
  const getMe = async (): Promise<IUserInfo | null> => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (!accessToken) {
      return null;
    }

    try {
      const response = await axios.get(GET_ME_URL_EXAMPLE, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        // 이 옵션은 쿠키를 서버와 주고받을 수 있게 해준다. (HTTP only 쿠키로 설정된 refresh token 자동 전송)
        withCredentials: true,
      });

      const responseData: IGetMeResponseData = response.data;

      if (!responseData.user) {
        return null;
      }

      // accessToken이 만료되었을 경우 재발급
      if (responseData.accessToken) {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.setItem(ACCESS_TOKEN, responseData.accessToken);
      }
      const userInfo: IUserInfo = responseData.user;
      dispatch(createUserInfo(userInfo));
      return userInfo;
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
