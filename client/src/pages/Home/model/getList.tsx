import axios from 'axios';
import useDecryptToken from '../../../common/utils/customHook/useDecryptToken';

export const getList = async (
  url: string,
  page: number,
  size: number,
  tab: string,
) => {
  try {
    const decrypt = useDecryptToken();
    const encryptedToken = localStorage.getItem('accessToken');

    if (encryptedToken) {
      const accessToken = decrypt(encryptedToken);

      const headers = {
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
    }
  } catch (err) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
};
