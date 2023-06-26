import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUserInfo } from '../../../common/store/UserInfoStore';
import { ACCESS_TOKEN } from '../../../common/utils/constants';
import axios from 'axios';
import { MembershipUrl } from '../../../common/utils/enum';
import { RootState } from '../../../common/store/RootStore';
import { LogoutBtn, LogoutBtnWrapper } from '../style';

function MembershipButtons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    dispatch(deleteUserInfo());
    navigate('/');
  };

  const memberId = useSelector((state: RootState) => state.userInfo.memberId);
  const handleWithdrawal = async () => {
    localStorage.removeItem(ACCESS_TOKEN);
    await axios.delete(MembershipUrl.Withdrawal + `/${memberId}`);
    dispatch(deleteUserInfo());
    navigate('/');
  };
  return (
    <LogoutBtnWrapper>
      <LogoutBtn onClick={handleLogout}>log out</LogoutBtn>
      <LogoutBtn onClick={handleWithdrawal}>withdraw</LogoutBtn>
    </LogoutBtnWrapper>
  );
}
export default MembershipButtons;
