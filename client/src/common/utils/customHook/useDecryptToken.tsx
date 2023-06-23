import CryptoJS from 'crypto-js';

function useDecryptToken() {
  const decryptToken = (encryptedToken: string) => {
    const bytes = CryptoJS.AES.decrypt(
      encryptedToken,
      import.meta.env.VITE_SECRET_KEY,
    );
    return bytes.toString(CryptoJS.enc.Utf8);
  };
  return decryptToken;
}
export default useDecryptToken;
