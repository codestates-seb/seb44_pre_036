import { useEffect } from 'react';
import Router from './Router';
import { GlobalStyle } from './common/style';
import GNB from './common/GNB/views/GNB';
import useGetMe from './common/utils/customHook/useGetMe';

function App() {
  // useGetMe()는 useQuery를 반환한다. refetch(서버에서 데이터를 다시 가져옴)를 사용하기 위해선 useQuery의 반환값을 사용해야 한다.
  const { refetch: refetchGetMe } = useGetMe();

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
      {/* <GNB /> */}
      <Router />
    </>
  );
}

export default App;
