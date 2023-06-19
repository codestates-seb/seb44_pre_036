export type UserInfoLabelProps = {
  label: string;
};

export type UserInfoFieldSignUp = 'name' | 'email' | 'password';

export type UserInfoField = 'email' | 'password';

export type Token = 'accessToken' | 'refreshToken';

export const enum MembershipUrl {
  signUp = 'https://6564-220-127-158-194.ngrok-free.app/members',
  Login = 'https://6564-220-127-158-194.ngrok-free.app/auth/login',
}
