import CryptoJS from 'crypto-js';

function useEncryptToken() {
  const encryptToken = (token: string) => {
    return CryptoJS.AES.encrypt(
      token,
      import.meta.env.VITE_SECRET_KEY,
    ).toString();
  };
  return encryptToken;
}
export default useEncryptToken;
