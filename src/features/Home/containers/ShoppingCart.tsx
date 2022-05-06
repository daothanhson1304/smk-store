import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ShoppingCartHeader } from '../components/ShoppingCartHeader';
import { ShoppingCartMain } from '../components/ShoppingCartMain';

const ShoppingCartContainer = styled.div`
  ${tw`
    col-span-6
  `}
`;
export const ShoppingCart = () => {
  return (
    <ShoppingCartContainer>
      <ShoppingCartHeader></ShoppingCartHeader>
      <ShoppingCartMain></ShoppingCartMain>
    </ShoppingCartContainer>
  );
};
