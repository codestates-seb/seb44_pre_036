import { Link } from 'react-router-dom';
import { QuestionContainer, QuestionContent, QuestionInfo } from '../style';
import Vote from './Vote';
import Author from './Author';
import { IUserInfo } from '../../../common/model/UserInfo';
import { useMutation } from 'react-query';
import { deleteItem } from '../model/deleteItem';
import { getItem } from '../../../common/type';

const Question = ({ item, user }: { item: getItem; user: IUserInfo }) => {
  const deleteMutation = useMutation(deleteItem);

  const handleDeleteItem = () => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      deleteMutation.mutate(item.questionId);
    }
  };

  return (
    <QuestionContainer>
      <Vote item={item} />
      <QuestionContent>
        <p>
          <div dangerouslySetInnerHTML={{ __html: item?.content }} />
        </p>
        <QuestionInfo>
          <div>
            <Link to={`/edit/${item?.questionId}`}>Edit</Link>
            <a onClick={handleDeleteItem}>Delete</a>
          </div>
          <Author item={item} user={user} />
        </QuestionInfo>
      </QuestionContent>
    </QuestionContainer>
  );
};

export default Question;
