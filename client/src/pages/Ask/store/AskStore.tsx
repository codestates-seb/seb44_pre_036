import { configureStore, createSlice } from '@reduxjs/toolkit';

export const askSlice = createSlice({
  name: 'ask',
  initialState: {
    title: '',
    content: '',
    memberId: 0,
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload.title;
    },
    setContent: (state, action) => {
      state.content = action.payload.content;
    },
    setMemberId: (state, action) => {
      state.memberId = action.payload.memberId;
    },
  },
});

export const store = configureStore({
  reducer: askSlice.reducer,
});

export const { setTitle, setContent, setMemberId } = askSlice.actions;
