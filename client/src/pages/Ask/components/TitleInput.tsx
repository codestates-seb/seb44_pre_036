import { BlueButton } from '../../../common/style';
import { TitleInputBox, TitleInputContainer } from '../style';

const TitleInput = () => {
  return (
    <TitleInputContainer>
      <h4>Title</h4>
      <p>Be specific and imagine you’re asking a question to another person.</p>
      <TitleInputBox
        type="text"
        placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
      />
      <BlueButton>Next</BlueButton>
    </TitleInputContainer>
  );
};

export default TitleInput;
