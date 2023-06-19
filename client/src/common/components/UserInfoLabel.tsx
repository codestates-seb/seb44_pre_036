import { StyledLabel } from '../style';
import { UserInfoLabelProps } from '../type';

function UserInfoLabel({ label }: UserInfoLabelProps) {
  return <StyledLabel>{label}</StyledLabel>;
}
export default UserInfoLabel;
