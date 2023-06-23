import axios from 'axios';
import { postItem } from '../../Board/type';
import { LISTCRUD_URL } from '../../../common/utils/constants';

export const postData = async (data: postItem) => {
  try {
    // const accessToken = localStorage.getItem('accessToken');

    const headers = {
      'ngrok-skip-browser-warning': 'true',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJBRE1JTiIsIlVTRVIiXSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJtZW1iZXJJZCI6MSwic3ViIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjg3NDM1Mzk1LCJleHAiOjE2ODc0Mzc3OTV9.v_B5KwR1OPpzJPxG88f0MqYpMbQI2kqszZ3SFzNA5b0',
      // Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.post(`${LISTCRUD_URL}/questions`, data, {
      headers,
    });
    const questionId = response.headers.location.split('/').pop();
    console.log('Data sent successfully');
    console.log('Question ID:', questionId);
  } catch (error) {
    console.log('Error while sending data:', error);
  }
};
