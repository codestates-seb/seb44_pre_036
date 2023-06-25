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
      console.log('store에 저장될 유저의 상태', action.payload);
      console.log('store에 저장될 answers', action.payload.answers);
      console.log('store에 저장될 authorities', action.payload.authorities);
      console.log('store에 저장될 createdTime', action.payload.createdTime);
      console.log('store에 저장될 email', action.payload.email);
      console.log('store에 저장될 name', action.payload.name);
      console.log(
        'store에 저장될 profileImageUrl (아직 더미이므로 undefined)',
        action.payload.profileImageUrl,
      );
      console.log('store에 저장될 memberId', action.payload.memberId);
      console.log('store에 저장될 modifiedTime', action.payload.modifiedTime);
      console.log('store에 저장될 questions', action.payload.questions);
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
