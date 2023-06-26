import axios from 'axios';
import { LISTCRUD_URL } from '../../../common/utils/constants';
import { postItem } from '../../../common/type';
import useDecryptToken from '../../../common/utils/customHook/useDecryptToken';

export const postData = async (data: postItem) => {
  try {
    const decrypt = useDecryptToken();

    const encryptedToken = localStorage.getItem('accessToken');

    if (encryptedToken) {
      const accessToken = decrypt(encryptedToken);

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      await axios.post(`${LISTCRUD_URL}/questions`, data, {
        headers,
      });
    }
  } catch (error) {
    console.log('Error while sending data:', error);
  }
};
