import axios from 'axios';
import { LISTCRUD_URL } from '../../../common/utils/constants';
import { editItem } from '../../../common/type';
import useDecryptToken from '../../../common/utils/customHook/useDecryptToken';

export const updateData = async (questionId: number, data: editItem) => {
  try {
    const decrypt = useDecryptToken();

    const encryptedToken = localStorage.getItem('accessToken');

    if (encryptedToken) {
      const accessToken = decrypt(encryptedToken);

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      console.log(accessToken);
      await axios.patch(`${LISTCRUD_URL}/questions/edit/${questionId}`, data, {
        headers,
      });
      console.log('데이터가 성공적으로 전송되었습니다.');
    }
  } catch (error) {
    console.log('데이터 전송 중 오류가 발생하였습니다:', error);
  }
};
