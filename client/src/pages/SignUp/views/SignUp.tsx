import SignUpForm from './SignUpForm';
import { SignUpContainer } from '../style';
import StackoverflowJoinBenefit from '../components/StackoverflowJoinBenefit';
import GoogleLoginBtn from '../../../common/components/GoogleLoginBtn';
import { SignUpArea } from '../style';

function SignUp() {
  return (
    <SignUpContainer>
      <StackoverflowJoinBenefit />
      <SignUpArea>
        <GoogleLoginBtn />
        <SignUpForm />
      </SignUpArea>
    </SignUpContainer>
  );
}
export default SignUp;
