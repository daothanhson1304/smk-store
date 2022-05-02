import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Product } from './Product';
import { IProduct } from './types';
import { useNavigate } from 'react-router';
import { ROUTES } from 'constants/constants';
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

const listProductData = [
  {
    id: 1,
    image: '',
    sale: 2,
    title: 'Mens winter Leathers jacket',
    price: 12,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem sint rem!',
    size: 1,
    category: 1,
  },
  {
    id: 2,
    image: '',
    sale: 2,
    title: 'Mens winter Leathers jacket',
    price: 12,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem sint rem!',
    size: 1,
    category: 1,
  },
  {
    id: 3,
    image: '',
    sale: 2,
    title: 'Mens winter Leathers jacket',
    price: 12,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem sint rem!',
    size: 1,
    category: 1,
  },
  {
    id: 4,
    image: '',
    sale: 2,
    title: 'Mens winter Leathers jacket',
    price: 12,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem sint rem!',
    size: 1,
    category: 1,
  },
  {
    id: 5,
    image: '',
    sale: 2,
    title: 'Mens winter Leathers jacket',
    price: 12,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem sint rem!',
    size: 1,
    category: 1,
  },
  {
    id: 6,
    image: '',
    sale: 2,
    title: 'Mens winter Leathers jacket',
    price: 12,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem sint rem!',
    size: 1,
    category: 1,
  },
  {
    id: 7,
    image: '',
    sale: 2,
    title: 'Mens winter Leathers jacket',
    price: 12,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem sint rem!',
    size: 1,
    category: 1,
  },
  {
    id: 8,
    image: '',
    sale: 2,
    title: 'Mens winter Leathers jacket',
    price: 12,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem sint rem!',
    size: 1,
    category: 1,
  },
];
export const ListProduct = () => {
  const navigate = useNavigate();
  const goToDetail = (product: IProduct) => {
    navigate(`${ROUTES.PRODUCT_DETAIL}/${product.id}`);
  };
  const addProductToCart = (product: IProduct) => {};
  return (
    <ListProductContainer>
      <Title>New Products</Title>
      <ProductGird>
        {listProductData.map((product) => (
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
