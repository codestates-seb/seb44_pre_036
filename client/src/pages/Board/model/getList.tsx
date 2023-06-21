import axios from 'axios';

export const getList = async () => {
  try {
    const res = await axios.get('api'); //! api 입력
    return res.data;
  } catch (err) {
    throw new Error('Failed to fetch data');
  }
};
