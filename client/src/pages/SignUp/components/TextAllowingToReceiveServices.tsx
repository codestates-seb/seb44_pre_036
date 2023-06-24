import { CheckBox, CheckBoxWrapper, Text2, TextWrapper2 } from '../style';

function TextAllowingToReceiveServices() {
  return (
    <TextWrapper2>
      <CheckBoxWrapper>
        <CheckBox type="checkbox" />
      </CheckBoxWrapper>
      <Text2>
        Opt-in to receive occasional product updates, user research invitations,
        company announcements, and digests.
      </Text2>
    </TextWrapper2>
  );
}
export default TextAllowingToReceiveServices;
