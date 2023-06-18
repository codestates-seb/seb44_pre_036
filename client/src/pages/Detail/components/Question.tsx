import { Link } from 'react-router-dom';
import { QuestionContainer, QuestionContent, QuestionInfo } from '../style';
import { item } from '../type';
import Vote from './Vote';
import Author from './Author';

const Qeustion = ({ item }: { item: item }) => {
  return (
    <QuestionContainer>
      <Vote item={item} />
      <QuestionContent>
        <p>{item.question}</p>
        <QuestionInfo>
          <Link to={`/edit/${item.id}`}>Edit</Link>
          <Author item={item} />
        </QuestionInfo>
      </QuestionContent>
    </QuestionContainer>
  );
};

export default Qeustion;
