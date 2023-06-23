import { configureStore, createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
  name: 'item',
  initialState: {
    questionId: 0,
    title: '',
    content: '',
    viewCount: 0,
    createdAt: '',
    updatedAt: '',
    memberId: 0,
    name: '',
    userAvatar: '',
    answers: [],
    voteCount: 0,
  },
  reducers: {
    setItem: (_state, action) => {
      return action.payload;
    },
  },
});

export const store = configureStore({
  reducer: { item: itemSlice.reducer },
});

export const { setItem } = itemSlice.actions;
