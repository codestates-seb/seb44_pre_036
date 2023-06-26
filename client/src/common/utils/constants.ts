import { UserInfoFieldSignUp, UserInfoField, Token } from '../type';

export const name: UserInfoFieldSignUp = 'name';

export const email: UserInfoField = 'email';

export const password: UserInfoField = 'password';

export const GET_ME_URL_EXAMPLE = 'https://localhost:5000/api/v1/users/me';

export const ACCESS_TOKEN: Token = 'accessToken';

export const PASSWORD_MIN_LENGTH: number = 8;

export const EMAIL_REGEX: RegExp =
  /^[A-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;

export const PASSWORD_REGEX: RegExp = /^(?=.*[A-Za-z])(?=.*\d).+$/;

export const PASSWORD_REGEX_NO_LETTERS: RegExp = /^[^a-zA-Z]+$/;

export const PASSWORD_REGEX_NO_NUMBERS: RegExp = /^[^0-9]+$/;

export const WARNING_MESSAGE_PASSWORD_EMPTY: string =
  'Password cannot be empty';

export const WARNING_MESSAGE_EMAIL_EMPTY: string = 'Email cannot be empty';

export const WARNING_MESSAGE_PASSWORD_WEAK: string =
  'Please add one of the following things to make your password stronger';

export const PASSWORD_RULE_MESSAGE: string = `Passwords must contain at least eight characters, including at least 1 letter and 1 number.`;

export const LISTCRUD_URL =
  'http://ec2-43-201-107-128.ap-northeast-2.compute.amazonaws.com';
