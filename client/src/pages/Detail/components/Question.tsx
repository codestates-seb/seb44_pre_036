import { Link } from 'react-router-dom';
import { QuestionContainer, QuestionContent, QuestionInfo } from '../style';
import { item } from '../type';
import Vote from './Vote';
import Author from './Author';
import { user } from '../../Board/type';

const Qeustion = ({ item, user }: { item: item; user: user }) => {
  return (
    <QuestionContainer>
      <Vote item={item} />
      <QuestionContent>
        <p>{item.question}</p>
        <QuestionInfo>
          <Link to={`/edit/${item.id}`}>Edit</Link>
          <Author item={item} user={user} />
        </QuestionInfo>
      </QuestionContent>
    </QuestionContainer>
  );
};

export default Qeustion;
