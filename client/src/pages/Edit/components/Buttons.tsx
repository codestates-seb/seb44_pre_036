import { MouseEventHandler } from 'react';
import { BlueButton } from '../../../common/style';
import { ButtonsContainer, TransparentButton } from '../style';

const Buttons = ({
  handleUpdate,
}: {
  handleUpdate: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <ButtonsContainer>
      <BlueButton onClick={handleUpdate}>Save edits</BlueButton>
      <TransparentButton>Cancel</TransparentButton>
    </ButtonsContainer>
  );
};

export default Buttons;
