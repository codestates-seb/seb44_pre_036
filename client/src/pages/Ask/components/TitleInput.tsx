import { useDispatch } from 'react-redux';
import { BlueButton } from '../../../common/style';
import { TitleInputBox, TitleInputContainer } from '../style';
import { setTitle } from '../store/AskStore';

const TitleInput = () => {
  const dispatch = useDispatch();

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle({ title: event.target.value }));
  };

  return (
    <TitleInputContainer>
      <h4>Title</h4>
      <p>Be specific and imagine you’re asking a question to another person.</p>
      <TitleInputBox
        type="text"
        placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
        onChange={handleTextChange}
      />
      <BlueButton>Next</BlueButton>
    </TitleInputContainer>
  );
};

export default TitleInput;
