import { useSelector } from 'react-redux';
import { ActivityContainer } from '../style';
import { RootState } from '../../../common/store/RootStore';
import { Link } from 'react-router-dom';

const ActivityTab = () => {
  const user = useSelector((state: RootState) => state.userInfo);
  console.log(user.answers);
  console.log(user.questions);

  return (
    <ActivityContainer>
      <div>
        <h1>{`Answers ${user.answers.length}`}</h1>
        <div>
          {user.answers.map((item) => {
            return <p key={item.answerId}>{item.content}</p>;
          })}
        </div>
      </div>
      <div>
        <h1>{`Questions ${user.questions.length}`}</h1>
        <div>
          {user.questions.map((item) => {
            return (
              <Link key={item.questionId} to={`/detail/${item.questionId}`}>
                <div key={item.questionId}>
                  <h3>{item.questionsTitle}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </ActivityContainer>
  );
};

export default ActivityTab;
