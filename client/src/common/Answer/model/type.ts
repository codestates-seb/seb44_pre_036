export interface Answerdata {
  memberId: string;
  questionId: string;
  content: string;
}

export interface Patchdata {
  answerId: string;
  content: string;
}

export interface DummyData {
  answerId: string;
  content: string;
  isAccepted: string;
  createdAt: Date;
  updatedAt: Date;
  questionId: string;
  memberId: string;
}
export interface Listdata {
  data: DummyData[];
  length: number;
}
