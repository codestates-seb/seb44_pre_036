import { useParams } from 'react-router-dom';
import { MainContainer } from '../style';
import ProfileTab from './ProfileTab';
import ActivityTab from './ActivityTab';

const Main = () => {
  const { tab } = useParams();

  return (
    <MainContainer>
      {tab === 'profile' && <ProfileTab />}
      {tab === 'activity' && <ActivityTab />}
    </MainContainer>
  );
};

export default Main;
