import { configureStore, createSlice } from '@reduxjs/toolkit';
import { pageInfo } from '../type';

export const listSlice = createSlice({
  name: 'list',
  initialState: { data: [], pageInfo: {} as pageInfo },
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
