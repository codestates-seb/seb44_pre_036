import axios from 'axios';
import { LISTCRUD_URL } from '../../../common/utils/constants';

export const deleteItem = async (questionId: number) => {
  try {
    const accessToken = localStorage.getItem('accessToken');

    const headers = {
      'ngrok-skip-browser-warning': 'true',
      Authorization: `Bearer ${accessToken}`,
    };

    await axios.delete(`${LISTCRUD_URL}/questions/${questionId}`, {
      headers,
    });

    console.log('삭제 요청이 성공적으로 완료되었습니다.');
  } catch (error) {
    console.log('삭제 요청을 처리하는 중 오류가 발생했습니다');
  }
};
