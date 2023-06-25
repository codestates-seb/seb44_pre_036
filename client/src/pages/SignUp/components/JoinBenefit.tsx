import { JoinBenefitLine, JoinBenefitText, SvgWrapper } from '../style';
import JoinBenefitSvgLogo from './JoinBenefitSvgLogo';
import { JoinBenefitProps } from '../../SignUp/type';

function JoinBenefit({ svgNumber, text }: JoinBenefitProps) {
  return (
    <JoinBenefitLine>
      <SvgWrapper>
        <JoinBenefitSvgLogo svg={svgNumber} />
      </SvgWrapper>
      <JoinBenefitText>{text}</JoinBenefitText>
    </JoinBenefitLine>
  );
}
export default JoinBenefit;
