import { Link } from 'react-router-dom';
import { TextWrapper5, Text4, Text5 } from '../../SignUp/style';

function TextLeadingToSignUpPage() {
  return (
    <TextWrapper5>
      <Text4>Don’t have an account?</Text4>
      <Link to="/signup">
        <Text5>Sign Up</Text5>
      </Link>
    </TextWrapper5>
  );
}
export default TextLeadingToSignUpPage;
