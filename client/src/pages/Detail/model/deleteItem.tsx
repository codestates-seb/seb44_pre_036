import axios from 'axios';
import { LISTCRUD_URL } from '../../../common/utils/constants';

export const deleteItem = async (questionId: number) => {
  try {
    const headers = {
      'ngrok-skip-browser-warning': 'true',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJBRE1JTiIsIlVTRVIiXSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJtZW1iZXJJZCI6MSwic3ViIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjg3NDM1Mzk1LCJleHAiOjE2ODc0Mzc3OTV9.v_B5KwR1OPpzJPxG88f0MqYpMbQI2kqszZ3SFzNA5b0',
      // Authorization: `Bearer ${accessToken}`,
    };

    await axios.delete(`${LISTCRUD_URL}/questions/${questionId}`, {
      headers,
    });

    console.log('삭제 요청이 성공적으로 완료되었습니다.');
  } catch (error) {
    console.log('삭제 요청을 처리하는 중 오류가 발생했습니다');
  }
};
