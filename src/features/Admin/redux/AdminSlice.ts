import { createSlice } from '@reduxjs/toolkit';

import { ICustomer, IInitialAdminState } from '../types/types';
import {
  addProduct,
  deleteCustomer,
  deleteInvoice,
  deleteProduct,
  getAllCustomer,
  getAllInvoice,
  getAllInvoices,
  getAllProduct,
  getProductById,
  updateInvoices,
} from './AdminThunk';

const initialState: IInitialAdminState = {
  customers: [],
  products: [],
  orders: [],
  invoices: [],
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
    builder
      .addCase(getAllInvoice.pending, (state, action) => {})
      .addCase(getAllInvoice.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(getAllInvoice.rejected, (state, action) => {});
    builder
      .addCase(deleteInvoice.pending, (state, action) => {})
      .addCase(deleteInvoice.fulfilled, (state, action) => {
        state.orders = state.orders.filter(
          (order) => order.id !== action.payload
        );
      })
      .addCase(deleteInvoice.rejected, (state, action) => {});
    builder
      .addCase(getAllInvoices.pending, (state, action) => {})
      .addCase(getAllInvoices.fulfilled, (state, action) => {
        state.invoices = action.payload.map((item: any) => {
          const {
            userId,
            totalPrice,
            status,
            quantity,
            productId,
            time_created,
          } = item;
          return {
            userId,
            productId,
            quantity,
            totalPrice,
            status,
            createAt: '' + time_created,
          };
        });
      })
      .addCase(getAllInvoices.rejected, (state, action) => {});
    builder
      .addCase(updateInvoices.pending, (state, action) => {})
      .addCase(updateInvoices.fulfilled, (state, action) => {
        state.orders = action.payload.map((order: any) => {
          return {
            ...order,
          };
        });
      })
      .addCase(updateInvoices.rejected, (state, action) => {});
  },
});

export default adminSlice.reducer;
