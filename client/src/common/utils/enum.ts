const BASE_URL = 'https://66d2-220-127-158-194.ngrok-free.app';

export enum MembershipUrl {
  SignUp = `${BASE_URL}/members`,
  Login = `${BASE_URL}/auth/login`,
  GetMe = `${BASE_URL}/members/me`,
  Withdrawal = `${BASE_URL}/members/delete`,
}
