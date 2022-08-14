import { loginUserFunc } from 'API/users-api';
import { setAuthToken } from 'API/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginThunk = createAsyncThunk('auth/login', async payload => {
  const data = await loginUserFunc(payload);
  setAuthToken(data.token);
  return data;
});
