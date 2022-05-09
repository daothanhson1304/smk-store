import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'api/api';

export const addProduct = createAsyncThunk(
  'admin/addProduct',
  async (data: any) => {
    const response = await axiosInstance.post('admin', data);
    return response.data;
  }
);
export const getAllProduct = createAsyncThunk(
  'admin/getAllProduct',
  async () => {
    const response = await axiosInstance.get('admin');
    return response.data;
  }
);
export const deleteProduct = createAsyncThunk(
  'admin/deleteProduct',
  async (id: number) => {
    const response = await axiosInstance.post('admin', id);
    return response.data;
  }
);
export const editProduct = createAsyncThunk(
  'admin/editProduct',
  async (data: any) => {
    const response = await axiosInstance.post('admin', data);
    return response.data;
  }
);
