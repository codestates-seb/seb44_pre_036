import { JoinBenefitContainer } from '../style';
import JoinBenefit from './JoinBenefit';

function JoinBenefitList() {
  return (
    <JoinBenefitContainer>
      <JoinBenefit svgNumber={1} text={'Get unstuck — ask a question'} />
      <JoinBenefit
        svgNumber={2}
        text={'Unlock new privileges like voting and commenting'}
      />
      <JoinBenefit
        svgNumber={3}
        text={'Save your favorite questions, answers, watch tags, and more'}
      />
      <JoinBenefit svgNumber={4} text={'Earn reputation and badges'} />
    </JoinBenefitContainer>
  );
}
export default JoinBenefitList;
