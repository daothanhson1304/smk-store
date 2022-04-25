import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Category } from '../containers/Category';
import { ListProduct } from '../containers/ListProduct';
const ProductsContainer = styled.div`
  ${tw`
    grid
    grid-cols-8
    gap-8
    px-12
    relative
  `}
`;
const RightContent = styled.div`
  ${tw`
    col-span-6
`}
`;
const LeftContent = styled.div`
  ${tw`
  col-span-2

`}
`;
export const Products = () => {
  return (
    <ProductsContainer>
      <LeftContent>
        <Category />
      </LeftContent>
      <RightContent>
        <ListProduct />
      </RightContent>
    </ProductsContainer>
  );
};
