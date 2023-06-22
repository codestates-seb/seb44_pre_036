import { BlueButton } from '../../../common/style';
import { ButtonsContainer, TransparentButton } from '../style';

const Buttons = () => {
  return (
    <ButtonsContainer>
      <BlueButton>Save edits</BlueButton>
      <TransparentButton>Cancel</TransparentButton>
    </ButtonsContainer>
  );
};

export default Buttons;
