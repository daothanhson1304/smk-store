import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthFormData, IToken } from '../types/types';
import axiosInstance from 'api/api';
const initialState: IToken = {
  token: localStorage.getItem('token'),
};
export const signIn = createAsyncThunk(
  'auth/getToken',
  async (data: IAuthFormData) => {
    const response = await axiosInstance.post('auth/signin', data);
    console.log('response', response.data.accessToken);
    return response.data;
  }
);

const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, action) => {})
      .addCase(signIn.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.result.accessToken);
        state.token = action.payload.result.accessToken;
      })
      .addCase(signIn.rejected, (state, action) => {});
  },
});

export default signInSlice.reducer;
