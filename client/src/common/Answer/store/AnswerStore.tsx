import { configureStore, createSlice } from '@reduxjs/toolkit';
import { AnswerInfo } from '../../type';
const initialState: AnswerInfo = {
  answerId: '',
  content: '',
  isAccepted: '',
  createdAt: '',
  updatedAt: '',
  vote: 0,
  questionId: '',
  memberId: '',
};
export const AnswerSlice = createSlice({
  name: 'anwser',
  initialState,
  reducers: {
    getAnswer: (_state, action) => {
      return action.payload;
    },
  },
});
export const store = configureStore({
  reducer: {
    answer: AnswerSlice.reducer,
  },
});

export const { getAnswer } = AnswerSlice.actions;
