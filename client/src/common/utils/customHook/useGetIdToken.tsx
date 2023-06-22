import { useEffect, useRef, useState } from 'react';
import { GetIdTokenType } from '../../../common/type';
import { MembershipUrl } from '../enum';

function useGetIdToken(): GetIdTokenType {
  const [idToken, setIdToken] = useState<string>();
  const googleSignInRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleCredentialResponse = (response: GoogleCredentialResponse) => {
      setIdToken(response.credential);
    };

    const renderButton = () => {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(googleSignInRef.current!, {
        theme: 'white',
        size: 'large',
        width: '300px',
      });
    };

    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = MembershipUrl.GoogleGsiClient;
      script.async = true;
      script.onload = () => {
        if (googleSignInRef.current) {
          renderButton();
        }
      };
      document.body.appendChild(script);
    };

    loadGoogleScript();

    return () => {
      const script = document.querySelector(
        `script[src="${MembershipUrl.GoogleGsiClient}"]`,
      );
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [idToken]);

  return [idToken, googleSignInRef];
}
export default useGetIdToken;
