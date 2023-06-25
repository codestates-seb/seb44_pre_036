import { MainContainer } from '../style';
import Question from '../components/Question';
import { IUserInfo } from '../../../common/model/UserInfo';
import { getItem } from '../../../common/type';
import SideBar from './SideBar';

const Main = ({ item, user }: { item: getItem; user: IUserInfo }) => {
  return (
    <MainContainer>
      <div>
        <Question item={item} user={user}></Question>
        <SideBar />
      </div>
    </MainContainer>
  );
};

export default Main;
