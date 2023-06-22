export type data = item[];

export type item = {
  id: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  question: string;
  voteCount: number;
};

export type user = {
  id: string;
  name: string;
};
// 임시 타입 지정
