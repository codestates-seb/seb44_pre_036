import axios from 'axios';
import { LISTCRUD_URL } from '../../../common/utils/constants';
import { postItem } from '../../../common/type';

export const postData = async (data: postItem) => {
  try {
    const accessToken = localStorage.getItem('accessToken');

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    await axios.post(`${LISTCRUD_URL}/questions`, data, {
      headers,
    });
  } catch (error) {
    console.log('Error while sending data:', error);
  }
};
