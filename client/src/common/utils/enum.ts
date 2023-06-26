const BASE_URL = 'https://preprojectseb44036.kro.kr:8080';

export enum MembershipUrl {
  GoogleGsiClient = 'https://accounts.google.com/gsi/client',
  SignUp = `${BASE_URL}/members`,
  Login = `${BASE_URL}/auth/login`,
  GetMe = `${BASE_URL}/members/me`,
  Withdrawal = `${BASE_URL}/members/delete`,
}
