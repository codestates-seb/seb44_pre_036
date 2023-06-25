import axios from 'axios';
import { LISTCRUD_URL } from '../../../common/utils/constants';

export const getListItem = async (id: string | undefined) => {
  try {
    const accessToken = localStorage.getItem('accessToken');

    const headers = {
      'ngrok-skip-browser-warning': 'true',
      Authorization: `Bearer ${accessToken}`,
    };

    const res = await axios.get(`${LISTCRUD_URL}/questions/${id}`, { headers });
    return res.data;
  } catch (err) {
    console.log('데이터를 받지 못하였습니다');
  }
};
