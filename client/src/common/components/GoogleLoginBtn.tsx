import useGetIdToken from '../utils/customHook/useGetIdToken';
import { SocialLoginBtn } from '../../common/style';

function GoogleLoginBtn() {
  const [idToken, googleSignInRef] = useGetIdToken();
  console.log('idToken', idToken);

  return <SocialLoginBtn ref={googleSignInRef}></SocialLoginBtn>;
}
export default GoogleLoginBtn;
