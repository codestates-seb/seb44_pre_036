import axios from 'axios';
import { LISTCRUD_URL } from '../../../common/utils/enum';

export const getListItem = async (id: string | undefined) => {
  try {
    // const accessToken = localStorage.getItem('accessToken');

    const headers = {
      'ngrok-skip-browser-warning': 'true',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJBRE1JTiIsIlVTRVIiXSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJtZW1iZXJJZCI6MSwic3ViIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjg3NDM1Mzk1LCJleHAiOjE2ODc0Mzc3OTV9.v_B5KwR1OPpzJPxG88f0MqYpMbQI2kqszZ3SFzNA5b0',
      // Authorization: `Bearer ${accessToken}`,
    };

    const res = await axios.get(`${LISTCRUD_URL}/questions/${id}`, { headers });
    return res.data;
  } catch (err) {
    console.log('데이터를 받지 못하였습니다');
  }
};
