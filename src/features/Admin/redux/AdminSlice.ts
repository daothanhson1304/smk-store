import { createSlice } from '@reduxjs/toolkit';

import { ICustomer, IInitialAdminState } from '../types/types';
import {
  addProduct,
  deleteCustomer,
  deleteProduct,
  getAllCustomer,
  getAllProduct,
  getProductById,
} from './AdminThunk';

const initialState: IInitialAdminState = {
  customers: [],
  products: [],
};

const adminSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCustomer.pending, (state, action) => {})
      .addCase(getAllCustomer.fulfilled, (state, action) => {
        const data = action.payload;
        const newArray = data.map((customer: any) => {
          const newCustomer: ICustomer = {
            id: customer.id,
            username: customer.username,
            address: customer.address,
            mobileNumber: customer.mobileNumber,
            email: customer.email,
            gender: customer.gender,
          };
          return newCustomer;
        });
        state.customers = newArray;
      })
      .addCase(getAllCustomer.rejected, (state, action) => {});
    builder
      .addCase(deleteCustomer.pending, (state, action) => {})
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.customers = state.customers.filter(
          (customer) => customer.id !== action.payload
        );
      })
      .addCase(deleteCustomer.rejected, (state, action) => {});
    builder
      .addCase(addProduct.pending, (state, action) => {})
      .addCase(addProduct.fulfilled, (state, action) => {})
      .addCase(addProduct.rejected, (state, action) => {});
    builder
      .addCase(getAllProduct.pending, (state, action) => {})
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getAllProduct.rejected, (state, action) => {});
    builder
      .addCase(deleteProduct.pending, (state, action) => {})
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {});
    builder
      .addCase(getProductById.pending, (state, action) => {})
      .addCase(getProductById.fulfilled, (state, action) => {})
      .addCase(getProductById.rejected, (state, action) => {});
  },
});

export default adminSlice.reducer;
