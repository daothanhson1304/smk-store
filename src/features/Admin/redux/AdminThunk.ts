import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'api/api';
import { IInvoice, IInvoiceRequest, IProduct } from '../types/types';

export const addProduct = createAsyncThunk(
  'admin/addProduct',
  async (data: IProduct) => {
    const response = await axiosInstance.post('product/add', data);
    return response.data;
  }
);
export const getAllProduct = createAsyncThunk(
  'admin/getAllProduct',
  async () => {
    const response = await axiosInstance.get('product/getAll');
    return response.data;
  }
);
export const getProductById = createAsyncThunk(
  'admin/getProduct',
  async (id: number) => {
    const response = await axiosInstance.get(`product/get/${id}`);
    return response.data;
  }
);
export const deleteProduct = createAsyncThunk(
  'admin/deleteProduct',
  async (id: number) => {
    const response = await axiosInstance.delete(`product/delete/${id}`);
    return response.data;
  }
);
export const editProduct = createAsyncThunk(
  'admin/editProduct',
  async (data: { product: IProduct; id: number }) => {
    const response = await axiosInstance.put(
      `product/edit/${data.id}`,
      data.product
    );
    return response.data;
  }
);
export const getAllCustomer = createAsyncThunk(
  'admin/getAllCustomer',
  async () => {
    const response = await axiosInstance.get('user/getAll');
    return response.data;
  }
);
export const deleteCustomer = createAsyncThunk(
  'admin/deleteCustomer',
  async (id: number) => {
    const response = await axiosInstance.delete(`user/delete/${id}`);
    return response.data;
  }
);
export const addInvoice = createAsyncThunk(
  'admin/addInvoice',
  async (data: IInvoice) => {
    const response = await axiosInstance.post(`invoice/add`, data);
    return response.data;
  }
);
export const getAllInvoice = createAsyncThunk(
  'admin/getAllInvoice',
  async (userId: number) => {
    const response = await axiosInstance.get(
      `invoice/getInvoiceOfUser/${userId}`
    );
    return response.data;
  }
);
export const deleteInvoice = createAsyncThunk(
  'admin/deleteInvoice',
  async (id: number) => {
    const response = await axiosInstance.delete(`invoice/delete/${id}`);
    return response.data;
  }
);
export const getAllInvoices = createAsyncThunk(
  'admin/getAllInvoices',
  async () => {
    const response = await axiosInstance.get(`invoice/getAll`);
    return response.data;
  }
);
export const updateInvoices = createAsyncThunk(
  'admin/updateInvoices',
  async (data: any) => {
    const response = await axiosInstance.put(`invoice/update`, data);
    return response.data;
  }
);
