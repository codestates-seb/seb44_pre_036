import styled from 'styled-components';
import { BlueButton } from '../../common/style';
import { BlueButtonProps } from '../SignUp/type';
import { StyledForm } from '../../common/style';

export const BlueButtonMembership = styled(BlueButton)<BlueButtonProps>`
  width: 260px;
  margin: 20px;
`;

export const SignUpBox = styled(StyledForm)`
  height: 690px;
`;
