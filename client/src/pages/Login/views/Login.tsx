import { MembershipPageStyle, StackoverflowLogo } from '../../../common/style';
import GoogleLoginBtn from '../../../common/components/GoogleLoginBtn';
import LoginForm from './LoginForm';
import TextLeadingToSignUpPage from '../components/TextLeadingToSignUpPage';
import TextLeadingToSignUpOnTalentPage from '../components/TextLeadingToSignUpOnTalentPage';
import { LoginPageContainer } from '../style';

function Login() {
  return (
    <LoginPageContainer>
      <MembershipPageStyle />
      <StackoverflowLogo />
      <GoogleLoginBtn />
      <LoginForm />
      <TextLeadingToSignUpPage />
      <TextLeadingToSignUpOnTalentPage />
    </LoginPageContainer>
  );
}

export default Login;
