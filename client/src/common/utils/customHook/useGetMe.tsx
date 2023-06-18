import axios from 'axios';
import { ACCESS_TOKEN, GET_ME_URL_EXAMPLE } from '../constants';
import { IUserInfo } from '../../model/UserInfo';

function useGetMe(): () => Promise<IUserInfo | null> {
  const getMe = async () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (!accessToken) {
      return null;
    }

    try {
      const response = await axios.get(GET_ME_URL_EXAMPLE, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        // 이 옵션은 쿠키를 서버와 주고받을 수 있게 해준다.
        withCredentials: true,
      });
      // accessToken이 만료되었을 경우 재발급
      if (response.data.accessToken) {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
      }

      return response.data;
    } catch (error: Error | any) {
      // refresh token 만료 시 로그아웃 처리
      if (error.response.status === 401) {
        localStorage.removeItem(ACCESS_TOKEN);
      } else {
        console.error(error);
      }

      return null;
    }
  };

  return getMe;
}
export default useGetMe;
