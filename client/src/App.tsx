import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from './Router';
import useGetMe from './common/utils/customHook/useGetMe';
import { createUserInfo } from './common/store/UserInfoStore';

function App() {
  const dispatch = useDispatch();
  const getMe = useGetMe();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await getMe();
      if (!userInfo) {
        return;
      }
      console.log(userInfo);
      dispatch(createUserInfo(userInfo));
    };

    fetchUserInfo();
  }, []);

  return <Router />;
}

export default App;
