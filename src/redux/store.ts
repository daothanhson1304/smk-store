import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'features/Auth/redux/AuthSlice';
import appReducer from 'features/App/redux/AppSlice';
import adminReducer from 'features/Admin/redux/AdminSlice';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
const rootReducer = combineReducers({
  authReducer,
  appReducer,
  adminReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
