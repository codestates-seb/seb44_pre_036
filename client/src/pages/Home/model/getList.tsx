import axios from 'axios';

export const getList = async (
  url: string,
  page: number,
  size: number,
  tab: string,
) => {
  try {
    const accessToken = localStorage.getItem('accessToken');

    const headers = {
      'ngrok-skip-browser-warning': 'true',
      Authorization: `Bearer ${accessToken}`,
    };

    const res = await axios.get(url, {
      headers,
      params: {
        page: page,
        size: size,
        tab: tab,
      },
    });
    return res.data;
  } catch (err) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
};
