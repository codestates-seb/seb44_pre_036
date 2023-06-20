import { BlueButtonMembership } from '../style';
import { ConfirmButtonProps } from '../type';

function ConfirmButton({ type, setIsClicked, buttontext }: ConfirmButtonProps) {
  return (
    <BlueButtonMembership onClick={() => setIsClicked(true)}>
      {buttontext}
    </BlueButtonMembership>
  );
}
export default ConfirmButton;
