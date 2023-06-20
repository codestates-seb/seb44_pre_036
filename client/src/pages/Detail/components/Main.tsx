import { MainContainer } from '../style';
import { item } from '../type';
import Question from '../components/Question';
import { user } from '../../Board/type';

const Main = ({ item, user }: { item: item; user: user }) => {
  return (
    <MainContainer>
      <Question item={item} user={user}></Question>
    </MainContainer>
  );
};

export default Main;
