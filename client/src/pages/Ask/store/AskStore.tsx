import { configureStore, createSlice } from '@reduxjs/toolkit';

export const askSlice = createSlice({
  name: 'ask',
  initialState: {
    title: '',
    date: '',
    userId: '',
    userName: '',
    userAvatar: '',
    question: '',
    voteCount: 0,
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload.title;
    },
    setDate: (state, action) => {
      state.date = action.payload.date;
    },
    setUserId: (state, action) => {
      state.userId = action.payload.userId;
    },
    setUserName: (state, action) => {
      state.userName = action.payload.userName;
    },
    setUserAvatar: (state, action) => {
      state.userAvatar = action.payload.userAvatar;
    },
    setQuestion: (state, action) => {
      state.question = action.payload.question;
    },
  },
});

export const store = configureStore({
  reducer: askSlice.reducer,
});

export const {
  setTitle,
  setDate,
  setUserId,
  setUserName,
  setUserAvatar,
  setQuestion,
} = askSlice.actions;
