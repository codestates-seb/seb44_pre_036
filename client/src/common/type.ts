import { RefObject } from 'react';

export type UserInfoLabelProps = {
  label: string;
};

export type UserInfoFieldSignUp = 'name' | 'email' | 'password';

export type UserInfoField = 'email' | 'password';

export type Token = 'accessToken' | 'refreshToken';

export type GetIdTokenType = [string | undefined, RefObject<HTMLButtonElement>];
