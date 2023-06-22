import { configureStore, createSlice } from '@reduxjs/toolkit';

export const previewSlice = createSlice({
  name: 'preview',
  initialState: '',
  reducers: {
    setPreview: (_state, action) => {
      return action.payload;
    },
  },
});

export const store = configureStore({
  reducer: previewSlice.reducer,
});

export const { setPreview } = previewSlice.actions;
