import { Link } from 'react-router-dom';
import { QuestionContainer, QuestionContent, QuestionInfo } from '../style';
import Vote from './Vote';
import Author from './Author';
import { IUserInfo } from '../../../common/model/UserInfo';
import { getItem } from '../../Board/type';
import { useMutation } from 'react-query';
import { deleteItem } from '../model/deleteItem';

const Qeustion = ({ item, user }: { item: getItem; user: IUserInfo }) => {
  const deleteMutation = useMutation(deleteItem);

  const handleDeleteItem = () => {
    console.log('deleted');
    deleteMutation.mutate(item.questionId);
  };

  return (
    <QuestionContainer>
      <Vote item={item} />
      <QuestionContent>
        <p>{item?.content}</p>
        <QuestionInfo>
          <div>
            <Link to={`/edit/${item?.questionId}`}>Edit</Link>
            <a
              onClick={() =>
                window.confirm(
                  'Are you sure you want to delete this question?',
                ) && handleDeleteItem()
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
