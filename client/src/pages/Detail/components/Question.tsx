import { Link, useNavigate } from 'react-router-dom';
import { QuestionContainer, QuestionContent, QuestionInfo } from '../style';
import Vote from './Vote';
import Author from './Author';
import { IUserInfo } from '../../../common/model/UserInfo';
import { useMutation } from 'react-query';
import { deleteItem } from '../model/deleteItem';
import { getItem } from '../../../common/type';

const Question = ({ item, user }: { item: getItem; user: IUserInfo }) => {
  const navigate = useNavigate();
  const deleteMutation = useMutation(deleteItem);

  const handleDeleteItem = () => {
    if (item.memberId === user.memberId) {
      if (window.confirm('Are you sure you want to delete this question?')) {
        deleteMutation.mutate(item.questionId);
      }
      navigate(-1);
    } else {
      window.alert('You can not delete this question.');
    }
  };

  return (
    <QuestionContainer>
      <Vote item={item} />
      <QuestionContent>
        <div>
          <div dangerouslySetInnerHTML={{ __html: item?.content }} />
        </div>
        <QuestionInfo>
          <div>
            <Link to={user.memberId ? `/edit/${item?.questionId}` : '/login'}>
              Edit
            </Link>
            <a onClick={handleDeleteItem}>Delete</a>
          </div>
          <Author item={item} user={user} />
        </QuestionInfo>
      </QuestionContent>
    </QuestionContainer>
  );
};

export default Question;
