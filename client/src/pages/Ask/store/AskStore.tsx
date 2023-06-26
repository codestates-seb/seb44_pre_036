import { configureStore, createSlice } from '@reduxjs/toolkit';

export const askSlice = createSlice({
  name: 'ask',
  initialState: {
    title: '',
    content: '',
    viewCount: 0,
    createdAt: new Date().toLocaleDateString(),
    updatedAt: '',
    memberId: 0,
    name: 'Mooobi',
    userAvatar:
      'https://lh3.googleusercontent.com/a/AAcHTtf_r7CBglmE-aDKLINfK78xcsVPtrg5Q7sHnOHW=k-s256',
    answers: [],
    voteCount: 0,
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload.title;
    },
    setContent: (state, action) => {
      state.content = action.payload.content;
    },
    setViewCount: (state, action) => {
      state.viewCount = action.payload.viewCount;
    },
    setCreatedAt: (state, action) => {
      state.createdAt = action.payload.createdAt;
    },
    setUpdatedAt: (state, action) => {
      state.updatedAt = action.payload.updatedAt;
    },
    setMemberId: (state, action) => {
      state.memberId = action.payload.memberId;
    },
    setName: (state, action) => {
      state.name = action.payload.name;
    },
    setUserAvatar: (state, action) => {
      state.userAvatar = action.payload.userAvatar;
    },
  },
});

export const store = configureStore({
  reducer: askSlice.reducer,
});

export const {
  setTitle,
  setContent,
  setViewCount,
  setCreatedAt,
  setUpdatedAt,
  setMemberId,
  setName,
  setUserAvatar,
} = askSlice.actions;
