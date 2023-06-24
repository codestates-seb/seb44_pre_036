import { useSelector } from 'react-redux';
import { ActivityContainer } from '../style';
import { RootState } from '../../../common/store/RootStore';

const ActivityTab = () => {
  const user = useSelector((state: RootState) => state.userInfo);

  return (
    <ActivityContainer>
      <div>
        <h1>{`Answers ${user.answers.length}`}</h1>
        <p>
          {user.answers.map((item) => {
            return <p>{item[1]}</p>;
          })}
        </p>
      </div>
      <div>
        <h1>{`Questions ${user.questions.length}`}</h1>
        <p>
          {user.questions.map((item) => {
            return (
              <p>
                <h3>{item[1]}</h3>
                <p>{item[2]}</p>
              </p>
            );
          })}
        </p>
      </div>
    </ActivityContainer>
  );
};

export default ActivityTab;
