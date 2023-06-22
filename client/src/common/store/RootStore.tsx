import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userInfo } from './UserInfoStore';
import { filterSlice } from '../../pages/Board/store/FilterStore';

const rootReducer = combineReducers({
  userInfo: userInfo.reducer,
  filter: filterSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
