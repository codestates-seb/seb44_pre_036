import styled from 'styled-components';
import { BlueButton, TextWrapper, Text } from '../../common/style';
import { BlueButtonProps } from '../SignUp/type';
import { StyledForm } from '../../common/style';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const JoinBenefitContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  width: 500px;
`;

export const BlueButtonMembership = styled(BlueButton)<BlueButtonProps>`
  width: 260px;
  margin: 20px;
`;

export const SignUpBox = styled(StyledForm)`
  height: 690px;
`;

export const TextWrapper2 = styled(TextWrapper)`
  display: flex;
  flex-direction: row;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 33px;
`;

export const CheckBox = styled.input``;

export const Text2 = styled(Text)`
  font-weight: 450;
  color: black;
  margin-left: 5px;
`;

export const Title = styled.h1`
  font-size: 27px;
  font-weight: 500;
  margin: 0 45px 20px 0;
`;

export const JoinBenefitWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 25px 20px 32px;
  border: 1px solid #e0e0e0;
  width: 370px;
`;

export const JoinBenefit = styled.li`
  text-decoration: none;
  margin: 10px 0 10px 0;
  font-size: 16px;
`;

export const TextWrapper3 = styled(TextWrapper)`
  width: 360px;
`;

export const RobotBoxContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  margin: 20px 0 13px 0;
  height: 155px;
  background-color: #f5f5f5;
`;

export const RobotBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 130px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export const Text3 = styled(Text)`
  font-size: 15px;
  font-weight: 500;
  color: black;
  width: 1000px;
  margin-left: 8px;
`;

export const TextWrapper4 = styled(TextWrapper)`
  margin: 0 0 0 3px;
  width: 130px;
`;
