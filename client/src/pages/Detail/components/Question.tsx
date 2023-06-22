import { Link } from 'react-router-dom';
import { QuestionContainer, QuestionContent, QuestionInfo } from '../style';
import { item } from '../type';
import Vote from './Vote';
import Author from './Author';
import { user } from '../../Board/type';

const Qeustion = ({ item, user }: { item: item; user: user }) => {
  const handleDeleteItem = () => {
    console.log('deleted');
  };

  return (
    <QuestionContainer>
      <Vote item={item} />
      <QuestionContent>
        <p>{item.question}</p>
        <QuestionInfo>
          <div>
            <Link to={`/edit/${item.id}`}>Edit</Link>
            <a
              onClick={() =>
                window.confirm(
                  'Are you sure you want to delete this question?',
                ) && handleDeleteItem
              }
            >
              Delete
            </a>
          </div>
          <Author item={item} user={user} />
        </QuestionInfo>
      </QuestionContent>
    </QuestionContainer>
  );
};

export default Qeustion;
