const BASE_URL =
  'http://ec2-43-201-107-128.ap-northeast-2.compute.amazonaws.com';

export enum MembershipUrl {
  GoogleGsiClient = 'https://accounts.google.com/gsi/client',
  SignUp = `${BASE_URL}/members`,
  Login = `${BASE_URL}/auth/login`,
  GetMe = `${BASE_URL}/members/me`,
  Withdrawal = `${BASE_URL}/members/delete`,
}
