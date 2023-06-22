import { configureStore, createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
  name: 'item',
  initialState: {},
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
