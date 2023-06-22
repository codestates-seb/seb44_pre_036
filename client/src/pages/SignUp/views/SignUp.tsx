import SignUpForm from './SignUpForm';
import { SignUpContainer } from '../style';
import StackoverflowJoinBenefit from '../components/StackoverflowJoinBenefit';
import { SignUpArea } from '../style';
import GoogleLoginBtn from '../../../common/components/GoogleLoginBtn';

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
