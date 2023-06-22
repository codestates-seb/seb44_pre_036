// 로그인한 유저의 정보를 담는 인터페이스
interface IUserInfo {
  answers: [
    answerId: number,
    content: string,
    createdAt: string,
    updatedAt: string,
    answerStatus: any,
  ][];
  authorities: ['USER'] | ['USER', 'ADMIN'];
  createdTime: string;
  email: string;
  memberId: number;
  modifiedTime: string;
  name: string;
  questions: [
    questionId: number,
    title: string,
    content: string,
    viewCount: number,
    createdAt: string,
    updatedAt: string,
  ][];
  profileImageUrl: string;
}
