import { RefObject } from 'react';
import { Answerdata } from './Answer/model/type';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export type postItem = {
  title: string;
  content: string;
  memberId: number;
};

export type getItem = {
  questionId: number;
  title: string;
  content: string;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
  memberId: number;
  name: string;
  userAvatar: string;
  answers: Answerdata[];
  voteCount: number;
};

export type pageInfo = {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

export type list = {
  data: getItem[];
  pageInfo: pageInfo;
};
