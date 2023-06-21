import SignUpForm from './SignUpForm';
import { SignUpContainer } from '../style';
import StackoverflowJoinBenefit from '../components/StackoverflowJoinBenefit';

function SignUp() {
  return (
    <SignUpContainer>
      <StackoverflowJoinBenefit />
      <SignUpForm />
    </SignUpContainer>
  );
}
export default SignUp;
