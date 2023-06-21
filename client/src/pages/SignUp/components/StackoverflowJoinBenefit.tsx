import { JoinBenefitContainer, Title } from '../style';
import JoinBenefitList from './JoinBenefitList';
import TextContainer from './TextContainer';

function StackoverflowJoinBenefit() {
  return (
    <JoinBenefitContainer>
      <Title>Join the Stack Overflow community</Title>
      <JoinBenefitList />
      <TextContainer
        content={
          'Collaborate and share knowledge with a private group for FREE. Get Stack Overflow for Teams free for up to 50 users.'
        }
      />
    </JoinBenefitContainer>
  );
}
export default StackoverflowJoinBenefit;
