import axios from 'axios';
import { getItem } from '../../Board/type';
import { LISTCRUD_URL } from '../../../common/utils/constants';

export const updateData = async (questionId: number, data: getItem) => {
  try {
    // const accessToken = localStorage.getItem('accessToken');

    const headers = {
      'ngrok-skip-browser-warning': 'true',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJBRE1JTiIsIlVTRVIiXSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJtZW1iZXJJZCI6MSwic3ViIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjg3NDM1Mzk1LCJleHAiOjE2ODc0Mzc3OTV9.v_B5KwR1OPpzJPxG88f0MqYpMbQI2kqszZ3SFzNA5b0',
      // Authorization: `Bearer ${accessToken}`,
    };

    await axios.patch(`${LISTCRUD_URL}/questions/edit/${questionId}`, data, {
      headers,
    });
    console.log('데이터가 성공적으로 전송되었습니다.');
  } catch (error) {
    console.log('데이터 전송 중 오류가 발생하였습니다:', error);
  }
};
