import { configureStore, createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
  name: 'list',
  initialState: { data: [] },
  reducers: {
    setList: (_state, action) => {
      return action.payload;
    },
  },
});

export const store = configureStore({
  reducer: listSlice.reducer,
});

export const { setList } = listSlice.actions;
