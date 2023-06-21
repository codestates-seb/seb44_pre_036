import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';
import { IUserInfo } from '../model/UserInfo';

const initialState: IUserInfo = {
  answers: [],
  authorities: ['USER'],
  createdTime: '',
  email: 'abcde123@gmail.com',
  name: '김감자',
  memberId: 0,
  modifiedTime: '',
  questions: [],
  profileImageUrl: 'https://dummyimage.com/100x100/8B4513/ffffff&text=Potato',
};

export const userInfo = createSlice({
  name: 'userInfoReducer',
  initialState,
  reducers: {
    createUserInfo: (state, action: PayloadAction<IUserInfo>) => {
      return {
        answers: action.payload.answers,
        authorities: action.payload.authorities,
        createdTime: action.payload.createdTime,
        email: action.payload.email,
        name: action.payload.name,
        profileImageUrl: state.profileImageUrl,
        memberId: action.payload.memberId,
        modifiedTime: action.payload.modifiedTime,
        questions: action.payload.questions,
      };
    },
  },
});

export const store = configureStore({ reducer: userInfo.reducer });
export const { createUserInfo } = userInfo.actions;
