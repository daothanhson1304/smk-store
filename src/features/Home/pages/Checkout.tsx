import React from 'react';
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
  return (
    <CheckoutContainer>
      <ShoppingCart></ShoppingCart>
      <CardDetail></CardDetail>
    </CheckoutContainer>
  );
};
