import { getAllProduct } from 'features/Admin/redux/AdminThunk';
import { hiddenLoading, showLoading } from 'features/App/redux/AppSlice';
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { useAppDispatch, useAppSelector } from 'redux/store';
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
  const { products } = useAppSelector((state) => state.adminReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getData = async () => {
      dispatch(showLoading());
      products && (await dispatch(getAllProduct()));
      dispatch(hiddenLoading());
    };
    getData();
  }, []);
  return (
    <ProductsContainer>
      <LeftContent>
        <Category />
      </LeftContent>
      <RightContent>
        <ListProduct products={products} />
      </RightContent>
    </ProductsContainer>
  );
};
