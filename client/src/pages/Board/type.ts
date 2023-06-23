import { Answerdata } from '../../common/Answer/model/type';

export type postItem = {
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

export type list = [
  {
    questionId: number;
    title: string;
    content: string;
    viewCount: number;
    createdAt: string;
    updatedAt: string;
    memberId: number;
    name: string;
    userAvatar: string;
    voteCount: number;
  },
];
