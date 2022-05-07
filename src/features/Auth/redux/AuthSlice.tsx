import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  ISignInFormData,
  IInitialState,
  ISignUpFormData,
} from '../types/types';
import axiosInstance from 'api/api';
import { useNavigate } from 'react-router';

const initialState: IInitialState = {
  token: '',
  isLogin: false,
  userInfo: {
    email: '',
    username: '',
  },
};
export const signIn = createAsyncThunk(
  'auth/signIn',
  async (data: ISignInFormData) => {
    const response = await axiosInstance.post('auth/signin', data);
    return response.data;
  }
);
export const signUp = createAsyncThunk(
  'auth/register',
  async (data: ISignUpFormData) => {
    const response = await axiosInstance.post('auth/signup', data);
    return response.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signIn.pending, (state, action) => {})
      .addCase(signIn.fulfilled, (state, action) => {
        const data = action.payload.result;
        const { accessToken, email, username } = data;
        localStorage.setItem('token', accessToken);
        state.isLogin = true;
        state.token = accessToken;
        const navigate = useNavigate();
        navigate(-1);
      })
      .addCase(signIn.rejected, (state, action) => {});
  },
});

export default authSlice.reducer;
