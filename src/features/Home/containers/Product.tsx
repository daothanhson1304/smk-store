import React from 'react';
import { BsHeart, BsCart, BsEye } from 'react-icons/bs';
import BlogImage from '../../../assets/images/blog-1.jpg';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IProduct } from './types';

const ProductItem = styled.div`
  ${tw`
    px-5
    py-5
    rounded-md
    relative
    hover:shadow-lg shadow-[#ededed]
    overflow-hidden
    cursor-pointer
  `}
  border: 1px #ededed solid;
  &:hover .product-actions {
    transform: translateX(-50px);
  }
`;

const ProductBadge = styled.div`
  ${tw``}
`;
const ProductBanner = styled.div`
  ${tw``}
  img {
    height: 200px;
    object-fit: cover;
  }
  .product-actions {
    transition: all 0.25s ease-out;
    position: absolute;
    top: 0;
    right: -50px;
  }
`;

const ProductButton = styled.div`
  ${tw`
    p-2
    bg-white
    m-2
    rounded
    cursor-pointer
  `}
  border: 1px solid #ededed;
`;
const ProductContent = styled.div`
  ${tw`
      mt-3
  `}
`;
const ProductDescription = styled.div`
  ${tw`
    text-[#787878]
    mb-2
  `}
`;

const ProductPrice = styled.div`
  ${tw`
  flex
  items-center
  justify-start
    `}
`;
const LastPrice = styled.div`
  ${tw`
    font-bold
    mr-3
    `}
`;
const Price = styled.div`
  ${tw`
    text-[#787878]

    `}

  text-decoration: line-through;
`;
interface IProps {
  product: IProduct;
  handleClickProduct: () => void;
  handleAddToCart: () => void;
}
export const Product: React.FC<IProps> = ({
  product,
  handleClickProduct,
  handleAddToCart,
}) => {
  return (
    <ProductItem>
      <ProductBanner>
        <img src={BlogImage} alt='' />
        <ProductBadge></ProductBadge>
        <div className='product-actions'>
          <ProductButton>
            <BsHeart></BsHeart>
          </ProductButton>
          <ProductButton onClick={handleClickProduct}>
            <BsEye />
          </ProductButton>
          <ProductButton onClick={handleAddToCart}>
            <BsCart />
          </ProductButton>
        </div>
      </ProductBanner>
      <ProductContent>
        <ProductDescription>{product.title}</ProductDescription>
        <ProductPrice>
          <LastPrice>{`$${
            product.sale ? product.price - product.sale : product.price
          }`}</LastPrice>
          {product.sale && <Price>{`$${product.price}`}</Price>}
        </ProductPrice>
      </ProductContent>
    </ProductItem>
  );
};
