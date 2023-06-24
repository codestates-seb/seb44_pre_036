import { useSelector } from 'react-redux';
import { ProfileContainer } from '../style';
import { RootState } from '../../../common/store/RootStore';

const ProfileTab = () => {
  const user = useSelector((state: RootState) => state.userInfo);

  return (
    <ProfileContainer>
      <h1>Email</h1>
      <p>{user.email}</p>
    </ProfileContainer>
  );
};

export default ProfileTab;
