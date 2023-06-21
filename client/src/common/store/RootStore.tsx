import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userInfo } from './UserInfoStore';
import { filterSlice } from '../../pages/Board/store/FilterStore';
import { previewSlice } from '../../pages/Edit/store/InputStore';
import { askSlice } from '../../pages/Ask/store/AskStore';

const rootReducer = combineReducers({
  userInfo: userInfo.reducer,
  filter: filterSlice.reducer,
  preview: previewSlice.reducer,
  ask: askSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
