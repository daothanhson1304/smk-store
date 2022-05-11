import { Table } from 'components/Table/Table';
import { ROUTES } from 'constants/constants';
import { hiddenLoading, showLoading } from 'features/App/redux/AppSlice';
import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from 'redux/store';
import styled from 'styled-components';
import tw from 'twin.macro';
import { renderProductStatus } from 'utils/utils';
import { Header } from '../components/Header';
import { deleteProduct, getAllProduct } from '../redux/AdminThunk';
const ProductsAdminPageContainer = styled.div`
  ${tw`

  `}
`;
export const ProductsAdminPage = () => {
  const navigate = useNavigate();
  const { products } = useAppSelector((state) => state.adminReducer);
  const dispatch = useAppDispatch();

  const handleAddProduct = () => {
    navigate(`/${ROUTES.ADMIN}/${ROUTES.ADD_OR_EDIT_PRODUCT}`);
  };
  const handleDeleteProduct = async (id: number) => {
    dispatch(showLoading());
    await dispatch(deleteProduct(id));
    dispatch(hiddenLoading());
  };
  const handleEditProduct = (id: number) => {
    navigate(`/${ROUTES.ADMIN}/${ROUTES.ADD_OR_EDIT_PRODUCT}`, {
      state: {
        productId: id,
      },
    });
  };
  React.useEffect(() => {
    const getData = async () => {
      dispatch(showLoading());
      await dispatch(getAllProduct());
      setTimeout(() => {
        dispatch(hiddenLoading());
      }, 500);
    };
    getData();
  }, []);
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
        data={products.map((product) => {
          return { ...product, status: renderProductStatus(product.status) };
        })}
      ></Table>
    </ProductsAdminPageContainer>
  );
};
