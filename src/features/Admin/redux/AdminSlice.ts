import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'api/api';
import { useNavigate } from 'react-router';

const initialState = {};

const adminSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // builder.addCase(signIn.pending, (state, action) => {});
  },
});

export default adminSlice.reducer;
