import { useSelector } from 'react-redux';
import { HeaderContainer } from '../style';
import { RootState } from '../../../common/store/RootStore';

const Header = () => {
  const user = useSelector((state: RootState) => state.userInfo);

  return (
    <HeaderContainer>
      <img src={user.profileImageUrl} alt={user.name} />
      <div>
        <h1>{user.name}</h1>
      </div>
    </HeaderContainer>
  );
};

export default Header;
