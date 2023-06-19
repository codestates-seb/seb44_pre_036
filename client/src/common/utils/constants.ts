import { UserInfoField, Token } from '../type';

export const DisplayName: UserInfoField = 'DisplayName';

export const Email: UserInfoField = 'Email';

export const Password: UserInfoField = 'Password';

// 잠시 보관. 향후 API URL 받으면 enum으로 바꿀 예정
export const SIGN_UP_URL_EXAMPLE = 'https://localhost:5001/api/Account/SignUp';
export const GET_ME_URL_EXAMPLE = 'https://localhost:5001/api/Account/GetMe';

export const ACCESS_TOKEN: Token = 'accessToken';

export const REFRESH_TOKEN: Token = 'refreshToken';

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
