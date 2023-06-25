import { MainContainer } from '../style';
import Question from '../components/Question';
import { IUserInfo } from '../../../common/model/UserInfo';
import { getItem } from '../../../common/type';

const Main = ({ item, user }: { item: getItem; user: IUserInfo }) => {
  return (
    <MainContainer>
      <Question item={item} user={user}></Question>
    </MainContainer>
  );
};

export default Main;
