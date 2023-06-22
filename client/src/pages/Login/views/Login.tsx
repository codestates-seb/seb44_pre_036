import LoginForm from './LoginForm';
import { LoginPageContainer } from '../style';
import GoogleLoginBtn from '../../../common/components/GoogleLoginBtn';
import { StackoverflowLogo } from '../../../common/style';

function Login() {
  return (
    <LoginPageContainer>
      <StackoverflowLogo />
      <GoogleLoginBtn />
      <LoginForm />
    </LoginPageContainer>
  );
}

export default Login;
