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
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return getMe;
}
export default useGetMe;
