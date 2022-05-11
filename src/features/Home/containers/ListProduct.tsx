import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Product } from './Product';
import { useNavigate } from 'react-router';
import { ROUTES } from 'constants/constants';
import { useAppSelector } from 'redux/store';
import { IProduct } from 'features/Admin/types/types';
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
  const addProductToCart = (product: IProduct) => {
    if (!isAuthUser) {
      navigate(ROUTES.LOGIN);
    } else {
      navigate(ROUTES.CHECKOUT);
    }
  };
  return (
    <ListProductContainer>
      <Title>New Products</Title>
      <ProductGird>
        {products &&
          products.map((product) => (
            <Product
              product={product}
              handleClickProduct={() => {
                goToDetail(product);
              }}
              handleAddToCart={() => {
                addProductToCart(product);
              }}
            ></Product>
          ))}
      </ProductGird>
    </ListProductContainer>
  );
};
