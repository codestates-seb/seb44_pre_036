import Main from '../components/Main';
import Header from '../components/Header';
import Tab from '../components/Tab';
import { Page } from '../style';

const MyPage = () => {
  return (
    <Page>
      <Header />
      <Tab />
      <Main />
    </Page>
  );
};

export default MyPage;
