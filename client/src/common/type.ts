import { RefObject } from 'react';

declare global {
  interface Window {
    google: any;
  }
}

export type UserInfoLabelProps = {
  label: string;
};

export type UserInfoFieldSignUp = 'name' | 'email' | 'password';

export type UserInfoField = 'email' | 'password';

export type Token = 'accessToken' | 'refreshToken';

export type GetIdTokenType = [string | undefined, RefObject<HTMLButtonElement>];

export enum GoogleLoginBtnStyle {
  theme = 'white',
  size = 'large',
  width = '300px',
}
