import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IProduct } from './types';
import BlogImage from '../../../assets/images/blog-1.jpg';

const ProductDetailContainer = styled.div`
  ${tw`
    grid
    grid-cols-2
    px-12
    gap-16
  `}
`;
const ProductImage = styled.div`
  ${tw`
    col-span-1

  `}
`;
const ProductContent = styled.div`
  ${tw`


  `}
`;
const ProductTitle = styled.div`
  ${tw`
      uppercase
      text-5xl
      text-black
      font-bold
  `}
`;
const ProductDescription = styled.div`
  ${tw`
    text-[#787878]
    my-3
  `}
`;
const ProductPrice = styled.div`
  ${tw`
  flex
  items-end
  `}
`;
const ProductButton = styled.button`
  ${tw`
    uppercase
    text-white
    text-xl
    font-bold
    px-4
    py-3
    bg-red-400
    mt-8
    rounded-md

  `}
`;
const LastPrice = styled.div`
  ${tw`
    font-bold
    mr-3
    text-3xl
    `}
`;
const Price = styled.div`
  ${tw`
    text-[#787878]
    text-2xl
    `}

  text-decoration: line-through;
`;
const product: IProduct = {
  id: 1,
  image: '',
  sale: 2,
  title: 'Mens winter Leathers jacket',
  price: 12,
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae maiores magnam distinctio ex architecto impedit, voluptatem ipsa, at in ea expedita.',
  size: 1,
  category: 1,
};
export const ProductDetail = () => {
  return (
    <ProductDetailContainer>
      <ProductImage>
        <img src={BlogImage} alt='' />
      </ProductImage>
      <ProductContent>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>
          <LastPrice>{`$${
            product.sale ? product.price - product.sale : product.price
          }`}</LastPrice>
          {product.sale && <Price>{`$${product.price}`}</Price>}
        </ProductPrice>
        <ProductButton>Add to cart</ProductButton>
      </ProductContent>
    </ProductDetailContainer>
  );
};
