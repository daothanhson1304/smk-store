import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  ISignInFormData,
  IInitialState,
  ISignUpFormData,
} from '../types/types';
import axiosInstance from 'api/api';
const roles = localStorage.getItem('roles');
const initialState: IInitialState = {
  token: localStorage.getItem('token') || '',
  isAuthUser: JSON.parse(localStorage.getItem('isAuthUser') || 'false'),
  userInfo: {
    username: localStorage.getItem('userName') || '',
    email: localStorage.getItem('userEmail') || '',
  },
  roles: roles ? JSON.parse(roles) : [],
};
export const signIn = createAsyncThunk(
  'auth/signIn',
  async (data: ISignInFormData) => {
    const response = await axiosInstance.post('auth/signIn', data);
    return response.data;
  }
);
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data: ISignUpFormData) => {
    const response = await axiosInstance.post('auth/signUp', data);
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
        const data = action.payload;
        const { accessToken, email, username, roles } = data;
        localStorage.setItem('token', accessToken);
        localStorage.setItem('userName', username);
        localStorage.setItem('userEmail', username);
        localStorage.setItem('isAuthUser', 'true');
        localStorage.setItem('roles', JSON.stringify(roles));
        state.isAuthUser = true;
        state.token = accessToken;
        state.userInfo = { email, username };
        state.roles = roles;
      })
      .addCase(signIn.rejected, (state, action) => {});
    builder
      .addCase(signUp.pending, (state, action) => {})
      .addCase(signUp.fulfilled, (state, action) => {
        // const data = action.payload.result.data;
        // const { accessToken, email, username } = data;
        // localStorage.setItem('token', accessToken);
        // state.isAuthUser = true;
        // state.token = accessToken;
        // const navigate = useNavigate();
        // navigate(-1);
      })
      .addCase(signUp.rejected, (state, action) => {});
  },
});

export default authSlice.reducer;
