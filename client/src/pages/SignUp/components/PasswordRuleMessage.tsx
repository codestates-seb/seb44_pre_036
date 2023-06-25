import { TextWrapper, Text } from '../../../common/style';
import { PASSWORD_RULE_MESSAGE } from '../../../common/utils/constants';

function PasswordRuleMessage() {
  return (
    <TextWrapper>
      <Text>{PASSWORD_RULE_MESSAGE}</Text>
    </TextWrapper>
  );
}
export default PasswordRuleMessage;
