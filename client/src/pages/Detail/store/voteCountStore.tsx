import { configureStore, createSlice } from '@reduxjs/toolkit';

export const voteCountSlice = createSlice({
  name: 'voteCount',
  initialState: 0,
  reducers: {
    setVoteCount: (_state, action) => {
      return action.payload;
    },
  },
});

export const store = configureStore({
  reducer: voteCountSlice.reducer,
});

export const { setVoteCount } = voteCountSlice.actions;
