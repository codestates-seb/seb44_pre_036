import { StyledInput } from '../../../common/style';
import { RobotBox, RobotBoxContainer, Text3, TextWrapper4 } from '../style';

function ImNotARobotBox() {
  return (
    <RobotBoxContainer>
      <RobotBox>
        <TextWrapper4>
          <StyledInput type="checkbox" />
          <Text3>I'm not a robot</Text3>
        </TextWrapper4>
      </RobotBox>
    </RobotBoxContainer>
  );
}
export default ImNotARobotBox;
