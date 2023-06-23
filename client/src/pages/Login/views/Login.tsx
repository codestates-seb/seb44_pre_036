import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import { LoginPageContainer } from '../style';
import GoogleLoginBtn from '../../../common/components/GoogleLoginBtn';
import { StackoverflowLogo } from '../../../common/style';
import { TextWrapper5, Text4, Text5 } from '../../SignUp/style';

function Login() {
  return (
    <LoginPageContainer>
      <StackoverflowLogo />
      <GoogleLoginBtn />
      <LoginForm />
      <TextWrapper5>
        <Text4>Don’t have an account?</Text4>
        <Link to="/signup">
          <Text5>Sign Up</Text5>
        </Link>
      </TextWrapper5>
      <TextWrapper5>
        <Text4>Are you an employer?</Text4>
        <Text5>Sign up on Talent</Text5>
      </TextWrapper5>
    </LoginPageContainer>
  );
}

export default Login;
