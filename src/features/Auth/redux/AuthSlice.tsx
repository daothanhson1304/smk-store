import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  ISignInFormData,
  IInitialState,
  ISignUpFormData,
} from '../types/types';
import axiosInstance from 'api/api';

const initialState: IInitialState = {
  token: localStorage.getItem('token'),
  isLogin: false,
};
export const signIn = createAsyncThunk(
  'auth/signIn',
  async (data: ISignInFormData) => {
    const response = await axiosInstance.post('auth/signin', data);
    console.log('response', response.data.accessToken);
    return response.data;
  }
);
export const signUp = createAsyncThunk(
  'auth/register',
  async (data: ISignUpFormData) => {
    const response = await axiosInstance.post('auth/signup', data);
    console.log('response', response.data.accessToken);
    return response.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, action) => {})
      .addCase(signIn.fulfilled, (state, action) => {
        const accessToken = action.payload.result.accessToken;
        localStorage.setItem('token', accessToken);
        state.token = accessToken;
      })
      .addCase(signIn.rejected, (state, action) => {});
  },
});

export default authSlice.reducer;
