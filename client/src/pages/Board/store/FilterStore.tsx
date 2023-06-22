import { configureStore, createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const store = configureStore({
  reducer: filterSlice.reducer,
});

export const { setFilter } = filterSlice.actions;
