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
