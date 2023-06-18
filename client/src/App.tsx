import { useEffect } from 'react';
import Router from './Router';
import useGetMe from './common/utils/customHook/useGetMe';

function App() {
  const getMe = useGetMe();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await getMe();
      if (!userInfo) {
        return;
      }
      console.log(userInfo);
    };

    fetchUserInfo();
  }, []);

  return <Router />;
}

export default App;
