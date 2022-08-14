import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { initialState } from './initialState';

export const store = configureStore({
  initialState,
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});
