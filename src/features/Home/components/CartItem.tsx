import { listProductData } from 'constants/constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import BannerImageOne from '../../../assets/images/banner-1.jpg';
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
const CartItemContainer = styled.div`
  ${tw`
      grid
      grid-cols-10
      my-5
      rounded-3xl
      px-7
      py-5
      shadow-xl
      gap-6
  `}
`;
const ProductInfo = styled.div`
  ${tw`
    col-span-6
    flex
    items-center
  `}
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 15px;
    margin-right: 30px;
  }
`;
const ProductContent = styled.div`
  ${tw`

`}
`;
const ProductTitle = styled.div`
  ${tw`
  font-bold
`}
`;
const ProductDescription = styled.div`
  ${tw`

`}
`;
const ProductActions = styled.div`
  ${tw`
  flex
  items-center
  justify-around
  col-span-4
`}
`;
const ProductQuantity = styled.div`
  ${tw`
  flex
  items-center
`}
`;
const ProductTotalPrice = styled.div`
  ${tw`
    text-xl
    font-bold
`}
`;
const ProductDeleteButton = styled.div`
  ${tw`

`}
`;
const Icon = styled.div`
  ${tw`
  p-3
  cursor-pointer
  text-xl
  `}
`;
const Quantity = styled.div`
  ${tw`
    w-8
    h-8
    flex
    items-center
    justify-center
    rounded-xl
`}
  border: 1px solid #ededed;
`;
export const CartItem = () => {
  const product = listProductData[0];
  return (
    <CartItemContainer>
      <ProductInfo>
        <img src={BannerImageOne} alt='' />
        <ProductContent>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
        </ProductContent>
      </ProductInfo>
      <ProductActions>
        <ProductQuantity>
          <Icon>
            <AiOutlinePlus></AiOutlinePlus>
          </Icon>
          <Quantity>{product.quantity}</Quantity>
          <Icon>
            <AiOutlineMinus></AiOutlineMinus>
          </Icon>
        </ProductQuantity>
        <ProductTotalPrice>{`$${
          product.quantity * (product.price - product.sale)
        }`}</ProductTotalPrice>
        <ProductDeleteButton>
          <Icon>
            <AiOutlineDelete></AiOutlineDelete>
          </Icon>
        </ProductDeleteButton>
      </ProductActions>
    </CartItemContainer>
  );
};
