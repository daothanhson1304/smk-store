import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Product } from './Product';
import { useNavigate } from 'react-router';
import { ROUTES } from 'constants/constants';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { IProduct } from 'features/Admin/types/types';
import { hiddenLoading, showLoading } from 'features/App/redux/AppSlice';
import { addInvoice } from 'features/Admin/redux/AdminThunk';
const ListProductContainer = styled.div`
  ${tw`
  `}
`;
const ProductGird = styled.div`
  ${tw`
    grid
    grid-cols-4
    gap-8
  `}
`;

const Title = styled.h1`
  ${tw`
    pb-3
    mb-6
  `}
  border-bottom: 1px solid #ededed;
`;
interface IProps {
  products: IProduct[];
}
export const ListProduct: React.FC<IProps> = ({ products }) => {
  const { isAuthUser } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const goToDetail = (product: IProduct) => {
    navigate(`${ROUTES.PRODUCT_DETAIL}/${product.id}`);
  };
  const { id } = useAppSelector((state) => state.authReducer.userInfo);
  const dispatch = useAppDispatch();
  const addProductToCart = async (product: IProduct) => {
    if (!isAuthUser) {
      navigate(ROUTES.LOGIN);
    } else {
      dispatch(showLoading());
      const userId = id ? id : 0;
      const param = {
        userId: userId,
        productId: product.id,
        quantity: 1,
        totalPrice: product.price - product.sale,
        status: 0,
      };
      await dispatch(addInvoice(param));
      dispatch(hiddenLoading());
      navigate(ROUTES.CHECKOUT);
    }
  };
  return (
    <ListProductContainer>
      <Title>New Products</Title>
      <ProductGird>
        {products &&
          products.map((product) => {
            if (product.status !== 0) {
              return (
                <Product
                  product={product}
                  handleClickProduct={() => {
                    goToDetail(product);
                  }}
                  handleAddToCart={() => {
                    addProductToCart(product);
                  }}
                ></Product>
              );
            }
            return null;
          })}
      </ProductGird>
    </ListProductContainer>
  );
};
