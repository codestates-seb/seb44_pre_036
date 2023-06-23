import { useEffect } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useGetIdToken from '../utils/customHook/useGetIdToken';
import useGetMe from '../utils/customHook/useGetMe';
import useEncryptToken from '../utils/customHook/useEncryptToken';
import { SocialLoginBtn } from '../../common/style';
import { ACCESS_TOKEN } from '../utils/constants';

function GoogleLoginBtn() {
  const [idToken, googleSignInRef] = useGetIdToken();
  console.log('1 준기님께 idToken 전달', idToken);
  const navigate = useNavigate();
  const encryptToken = useEncryptToken();

  const postData = async (idToken: any) => {
    console.log('준기님께 idToken 전달 후 받아온 데이터', idToken);
    const headers = {
      Authorization: `Bearer ${idToken}`,
    };
    const response = await axios.post(
      'https://2d14-220-127-158-194.ngrok-free.app/auth/login',
      {},
      { headers: headers },
    );
    console.log(
      '2 준기님께 idToken 전달 후 받아온 데이터의 헤더',
      response.headers,
    );
    return response.headers;
  };

  const { refetch: refetchGetMe } = useGetMe();

  const mutation = useMutation(postData, {
    onSuccess: async (header) => {
      if (!header) {
        return;
      }
      const accessToken: string = header.authorization.split(' ')[1];
      console.log('3 준기님께 idToken 전달 후 받아온 accessToken', accessToken);

      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.setItem(ACCESS_TOKEN, encryptToken(accessToken));

      await refetchGetMe();

      navigate('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    if (!idToken) {
      return;
    }
    const triggerPostIdToken = async () => {
      try {
        await mutation.mutateAsync(idToken);
      } catch (error) {
        console.log(error);
      }
    };

    triggerPostIdToken();
  }, [idToken]);

  return <SocialLoginBtn ref={googleSignInRef}></SocialLoginBtn>;
}
export default GoogleLoginBtn;
