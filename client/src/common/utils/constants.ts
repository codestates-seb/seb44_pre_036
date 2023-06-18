import { UserInfoField, Token } from '../type';

export const DisplayName: UserInfoField = 'DisplayName';

export const Email: UserInfoField = 'Email';

export const Password: UserInfoField = 'Password';

export const SIGN_UP_URL_EXAMPLE = 'https://localhost:5001/api/Account/SignUp';

export const GET_ME_URL_EXAMPLE = 'https://localhost:5001/api/Account/GetMe';

export const ACCESS_TOKEN: Token = 'accessToken';

export const REFRESH_TOKEN: Token = 'refreshToken';

export const PASSWORD_MIN_LENGTH = 8;

export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;

export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).+$/;

export const PASSWORD_REGEX_NO_LETTERS = /^[^a-zA-Z]+$/;

export const PASSWORD_REGEX_NO_NUMBERS = /^[^0-9]+$/;

export const WARNING_MESSAGE_PASSWORD_EMPTY = 'Password cannot be empty';

export const WARNING_MESSAGE_EMAIL_EMPTY = 'Email cannot be empty';

export const WARNING_MESSAGE_PASSWORD_WEAK =
  'Please add one of the following things to make your password stronger';

export const PASSWORD_RULE_MESSAGE = `Must contain at least eight characters, including at least 1 letter and 1 number`;