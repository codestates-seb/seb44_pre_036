const BASE_URL = 'https://0313-220-127-158-194.ngrok-free.app';

export const enum MembershipUrl {
  SignUp = `${BASE_URL}/members`,
  Login = `${BASE_URL}/auth/login`,
  GetMe = `${BASE_URL}/members/me`,
}
