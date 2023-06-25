import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userInfo } from './UserInfoStore';
import { filterSlice } from './FilterStore';
import { previewSlice } from '../../pages/Edit/store/PreviewStore';
import { askSlice } from '../../pages/Ask/store/AskStore';
import { itemSlice } from '../../pages/Detail/store/ItemStore';
import { editSlice } from '../../pages/Edit/store/EditStore';
import { pageSlice } from './PageStore';
import { listSlice } from './ListStore';
import { tabSlice } from '../../pages/MyPage/store/TabStore';
import { AnswerSlice } from '../Answer/store/AnswerStore';

const rootReducer = combineReducers({
  userInfo: userInfo.reducer,
  filter: filterSlice.reducer,
  preview: previewSlice.reducer,
  ask: askSlice.reducer,
  item: itemSlice.reducer,
  edit: editSlice.reducer,
  page: pageSlice.reducer,
  list: listSlice.reducer,
  tab: tabSlice.reducer,
  answer: AnswerSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
