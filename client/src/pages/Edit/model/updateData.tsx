import axios from 'axios';
import { LISTCRUD_URL } from '../../../common/utils/constants';
import { getItem } from '../../../common/type';

export const updateData = async (questionId: number, data: getItem) => {
  try {
    const accessToken = localStorage.getItem('accessToken');

    const headers = {
      'ngrok-skip-browser-warning': 'true',
      Authorization: `Bearer ${accessToken}`,
    };

    await axios.patch(`${LISTCRUD_URL}/questions/edit/${questionId}`, data, {
      headers,
    });
    console.log('데이터가 성공적으로 전송되었습니다.');
  } catch (error) {
    console.log('데이터 전송 중 오류가 발생하였습니다:', error);
  }
};
