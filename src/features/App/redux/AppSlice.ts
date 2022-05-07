import { createSlice } from '@reduxjs/toolkit';

import { IInitialState } from '../types/types';

const initialState: IInitialState = {
  isLoading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showLoading(state) {
      state.isLoading = true;
    },
    hiddenLoading(state) {
      state.isLoading = false;
    },
  },
});
export const { showLoading, hiddenLoading } = appSlice.actions;
export default appSlice.reducer;
