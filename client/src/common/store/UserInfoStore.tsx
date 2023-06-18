import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';
import { IUserInfo } from '../model/UserInfo';

const initialState: IUserInfo = {
  id: 0,
  email: '',
  name: '',
  profileImageUrl: '',
};

export const userInfo = createSlice({
  name: 'userInfoReducer',
  initialState,
  reducers: {
    createUserInfo: (state, action: PayloadAction<IUserInfo>) => {
      return {
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
        profileImageUrl: action.payload.profileImageUrl,
      };
    },
  },
});

export const store = configureStore({ reducer: userInfo.reducer });
export const { createUserInfo } = userInfo.actions;
