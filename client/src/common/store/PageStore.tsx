import { configureStore, createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
  name: 'page',
  initialState: 1,
  reducers: {
    setPage: (_state, action) => {
      return action.payload;
    },
  },
});

export const store = configureStore({
  reducer: pageSlice.reducer,
});

export const { setPage } = pageSlice.actions;
