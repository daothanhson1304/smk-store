import { updateInvoices } from 'features/Admin/redux/AdminThunk';
import { hiddenLoading, showLoading } from 'features/App/redux/AppSlice';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'redux/store';
import styled from 'styled-components';
import tw from 'twin.macro';
import { CardDetail } from '../containers/CardDetail';
import { ShoppingCart } from '../containers/ShoppingCart';

const CheckoutContainer = styled.div`
  ${tw`
    grid
    grid-cols-10
    px-12
    py-8
    gap-6
  `}
`;
export const Checkout = () => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.authReducer.userInfo);
  const { orders } = useAppSelector((state) => state.adminReducer);
  const handleCheckout = async () => {
    dispatch(showLoading());
    const param = {
      userId: id ? id : 0,
      productIds: orders
        .filter((order) => order.status === 0)
        .map((order) => order.productId),
    };
    await dispatch(updateInvoices(param));
    dispatch(hiddenLoading());
  };
  return (
    <CheckoutContainer>
      <ShoppingCart></ShoppingCart>
      <CardDetail checkout={handleCheckout}></CardDetail>
    </CheckoutContainer>
  );
};
