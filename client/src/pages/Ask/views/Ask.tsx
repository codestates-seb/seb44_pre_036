import { AskContainer, Page } from '../style';
import { BlueButton } from '../../../common/style';
import TitleInput from '../components/TitleInput';
import QuestionInput from '../components/QuestionInput';

const Ask = () => {
  return (
    <Page>
      <AskContainer>
        <h1>Ask a public question</h1>
        <TitleInput />
        <QuestionInput />
        <BlueButton>Post your question</BlueButton>
      </AskContainer>
    </Page>
  );
};

export default Ask;
