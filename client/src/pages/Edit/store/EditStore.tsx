import { configureStore, createSlice } from '@reduxjs/toolkit';

export const editSlice = createSlice({
  name: 'input',
  initialState: {
    title: '',
    content: '',
    questionId: 0,
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload.title;
    },
    setContent: (state, action) => {
      state.content = action.payload.content;
    },
  },
});

export const store = configureStore({
  reducer: editSlice.reducer,
});

export const { setTitle, setContent } = editSlice.actions;
