import { MouseEventHandler } from 'react';
import { BlueButton } from '../../../common/style';
import { ButtonsContainer, TransparentButton } from '../style';
import { useNavigate } from 'react-router-dom';

const Buttons = ({
  handleUpdate,
}: {
  handleUpdate: MouseEventHandler<HTMLButtonElement>;
}) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <ButtonsContainer>
      <BlueButton onClick={handleUpdate}>Save edits</BlueButton>
      <TransparentButton onClick={handleCancel}>Cancel</TransparentButton>
    </ButtonsContainer>
  );
};

export default Buttons;
