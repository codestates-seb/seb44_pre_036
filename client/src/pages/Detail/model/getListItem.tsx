import axios from 'axios';
import { LISTCRUD_URL } from '../../../common/utils/constants';
import useDecryptToken from '../../../common/utils/customHook/useDecryptToken';

export const getListItem = async (id: string | undefined) => {
  try {
    const decrypt = useDecryptToken();

    const encryptedToken = localStorage.getItem('accessToken');

    if (encryptedToken) {
      const accessToken = decrypt(encryptedToken);

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      const res = await axios.get(`${LISTCRUD_URL}/questions/${id}`, {
        headers,
      });
      return res.data;
    }
  } catch (err) {
    console.log('데이터를 받지 못하였습니다');
  }
};
