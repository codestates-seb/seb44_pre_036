import { useEffect } from 'react';
import Router from './Router';
import { GlobalStyle, Layout } from './common/style';
import GNB from './common/GNB/views/GNB';
import useGetMe from './common/utils/customHook/useGetMe';
import GSB from './common/GSB/views/GSB';
import { useSelector } from 'react-redux';
import { RootState } from './common/store/RootStore';

function App() {
  // useGetMe()는 useQuery를 반환한다. refetch(서버에서 데이터를 다시 가져옴)를 사용하기 위해선 useQuery의 반환값을 사용해야 한다.
  const { refetch: refetchGetMe } = useGetMe();
  const user = useSelector((state: RootState) => state.userInfo.memberId);
  const isLogin = user !== 0;
  useEffect(() => {
    const autoLogin = async () => {
      const { data: userInfo } = await refetchGetMe();
      if (!userInfo) {
        return;
      }
      console.log(userInfo);
    };

    autoLogin();
  }, []);

  return (
    <>
      <GlobalStyle />
      <GNB />
      <Layout>
        {isLogin && <GSB />}
        <Router />
      </Layout>
    </>
  );
}

export default App;
