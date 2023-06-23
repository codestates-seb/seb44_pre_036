import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userInfo } from './UserInfoStore';
import { filterSlice } from '../../pages/Board/store/FilterStore';
import { previewSlice } from '../../pages/Edit/store/PreviewStore';
import { askSlice } from '../../pages/Ask/store/AskStore';
import { itemSlice } from '../../pages/Detail/store/ItemStore';
import { editSlice } from '../../pages/Edit/store/EditStore';

const rootReducer = combineReducers({
  userInfo: userInfo.reducer,
  filter: filterSlice.reducer,
  preview: previewSlice.reducer,
  ask: askSlice.reducer,
  item: itemSlice.reducer,
  edit: editSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
