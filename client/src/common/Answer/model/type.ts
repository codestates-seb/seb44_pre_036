export interface Answerdata {
  questionId: number;
  content: string;
}

export interface Patchdata {
  answerId: string;
  content: string;
}

export interface AnswerData {
  answerId: string;
  content: string;
  isAccepted: string;
  createdAt: Date;
  updatedAt: Date;
  vote: number;
  questionId: number;
  memberId: number;
}
