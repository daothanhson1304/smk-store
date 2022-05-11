import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  ISignInFormData,
  IInitialState,
  ISignUpFormData,
  IUserInfo,
} from '../types/types';
import axiosInstance from 'api/api';
const userInfo = localStorage.getItem('userInfo');
const initialState: IInitialState = {
  isAuthUser: JSON.parse(localStorage.getItem('isAuthUser') || 'false'),
  userInfo: userInfo
    ? JSON.parse(userInfo)
    : {
        email: '',
        username: '',
        token: '',
        roles: [],
        id: -1,
      },
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
        const { accessToken, email, username, roles, id } = data;
        const userInfo: IUserInfo = {
          token: accessToken,
          email,
          username,
          roles,
          id,
        };
        localStorage.setItem('isAuthUser', 'true');
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        state.isAuthUser = true;
        state.userInfo = userInfo;
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
