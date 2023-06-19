import { MainContainer } from '../style';
import { item } from '../type';
import Question from '../components/Question';

const Main = ({ item }: { item: item }) => {
  return (
    <MainContainer>
      <Question item={item}></Question>
    </MainContainer>
  );
};

export default Main;
