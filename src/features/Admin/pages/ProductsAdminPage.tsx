import { Table } from 'components/Table/Table';
import { ROUTES } from 'constants/constants';
import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Header } from '../components/Header';
const ProductsAdminPageContainer = styled.div`
  ${tw`

  `}
`;
export const ProductsAdminPage = () => {
  const navigate = useNavigate();
  const handleAddProduct = () => {
    navigate(`/${ROUTES.ADMIN}/${ROUTES.ADD_OR_EDIT_PRODUCT}`);
  };
  return (
    <ProductsAdminPageContainer>
      <Header
        title={'Products Management'}
        buttonText={'Add Product'}
        handleAdd={handleAddProduct}
      />
      <Table
        data={[
          {
            username: 'daothanhson',
            status: 1,
            email: 'son@gmail.com',
            gender: 1,
          },
          {
            username: 'daothanhson',
            status: 1,
            email: 'son@gmail.com',
            gender: 1,
          },
          {
            username: 'daothanhson',
            status: 1,
            email: 'son@gmail.com',
            gender: 1,
          },
          {
            username: 'daothanhson',
            status: 1,
            email: 'son@gmail.com',
            gender: 1,
          },
          {
            username: 'daothanhson',
            status: 1,
            email: 'son@gmail.com',
            gender: 1,
          },
        ]}
      ></Table>
    </ProductsAdminPageContainer>
  );
};
