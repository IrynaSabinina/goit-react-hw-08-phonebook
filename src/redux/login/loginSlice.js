import { createSlice } from '@reduxjs/toolkit';
import { loginInitialState } from './loginInitialState';
import { loginThunk } from './loginThunks';
import { STATUS } from 'constanse/status';

export const authSlice = createSlice({
  name: 'login',
  initialState: loginInitialState,
  extraReducers: {
    [loginThunk.pending]: state => {
      state.status = STATUS.Loading;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.status = STATUS.Success;
      state.token = payload.token;
      state.user = payload.user;
    },
    [loginThunk.rejected]: state => {
      state.status = STATUS.Error;
    },
  },
});

export const authReducer = authSlice.reducer;
