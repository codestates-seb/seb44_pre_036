import axios from 'axios';
import { LISTCRUD_URL } from '../../../common/utils/constants';
import useDecryptToken from '../../../common/utils/customHook/useDecryptToken';

export const deleteItem = async (questionId: number) => {
  try {
    const decrypt = useDecryptToken();

    const encryptedToken = localStorage.getItem('accessToken');

    if (encryptedToken) {
      const accessToken = decrypt(encryptedToken);

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      await axios.delete(`${LISTCRUD_URL}/questions/${questionId}`, {
        headers,
      });

      console.log('삭제 요청이 성공적으로 완료되었습니다.');
    }
  } catch (error) {
    console.log('삭제 요청을 처리하는 중 오류가 발생했습니다');
  }
};
