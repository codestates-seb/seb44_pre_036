import { BlueButtonMembership } from '../style';
import { ConfirmButtonProps } from '../type';

function ConfirmButton({ setIsClicked, buttontext }: ConfirmButtonProps) {
  return (
    <BlueButtonMembership type="submit" onClick={() => setIsClicked(true)}>
      {buttontext}
    </BlueButtonMembership>
  );
}
export default ConfirmButton;
