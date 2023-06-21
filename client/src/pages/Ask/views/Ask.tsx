import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  AskContainer,
  Page,
  QuestionInputContainer,
  TitleInput,
  TitleInputContainer,
} from '../style';
import { BlueButton } from '../../../common/style';

const Ask = () => {
  const handleTextChange = (value: string) => {
    console.log(value);
  };

  return (
    <Page>
      <AskContainer>
        <h1>Ask a public question</h1>
        <TitleInputContainer>
          <h4>Title</h4>
          <p>
            Be specific and imagine you’re asking a question to another person.
          </p>
          <TitleInput
            type="text"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
          />
          <BlueButton>Next</BlueButton>
        </TitleInputContainer>
        <QuestionInputContainer>
          <h4>What are the details of your problem?</h4>
          <p>
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </p>
          <ReactQuill value="" onChange={handleTextChange} />
          <BlueButton>Next</BlueButton>
        </QuestionInputContainer>
        <BlueButton>Post your question</BlueButton>
      </AskContainer>
    </Page>
  );
};

export default Ask;
