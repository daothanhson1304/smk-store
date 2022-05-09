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
  const handleDeleteProduct = (id: number) => {
    console.log('id', id);
  };
  const handleEditProduct = (product: any) => {
    navigate(`/${ROUTES.ADMIN}/${ROUTES.ADD_OR_EDIT_PRODUCT}`, {
      state: {
        product,
      },
    });
  };
  return (
    <ProductsAdminPageContainer>
      <Header
        title={'Products Management'}
        buttonText={'Add Product'}
        handleAdd={handleAddProduct}
      />
      <Table
        handleDelete={handleDeleteProduct}
        handleEdit={handleEditProduct}
        data={[
          {
            username: 'daothanhson',
            id: 1,
            status: 1,
            email: 'son@gmail.com',
            gender: 1,
          },
          {
            username: 'daothanhson',
            id: 2,
            status: 1,
            email: 'son@gmail.com',
            gender: 1,
          },
          {
            username: 'daothanhson',
            id: 3,
            status: 1,
            email: 'son@gmail.com',
            gender: 1,
          },
          {
            username: 'daothanhson',
            id: 4,
            status: 1,
            email: 'son@gmail.com',
            gender: 1,
          },
          {
            username: 'daothanhson',
            id: 5,
            status: 1,
            email: 'son@gmail.com',
            gender: 1,
          },
        ]}
      ></Table>
    </ProductsAdminPageContainer>
  );
};
