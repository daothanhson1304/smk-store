import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import BlogImage from '../../../assets/images/blog-1.jpg';
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
const ProductItem = styled.div`
  ${tw`
    px-5
    py-5
    rounded-md
  `}
  border: 1px #ededed solid;
`;
const Title = styled.h1`
  ${tw`
    pb-3
    mb-6
  `}
  border-bottom: 1px solid #ededed;
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
`;
const ProductActions = styled.div`
  ${tw``}
`;
const ProductButton = styled.div`
  ${tw``}
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
const listProductData = [
  {
    id: 1,
    image: '',
    sale: 2,
    description: 'Mens winter Leathers jacket',
    price: 12,
  },
  {
    id: 2,
    image: '',
    sale: 2,
    description: 'Mens winter Leathers jacket',
    price: 12,
  },
  {
    id: 3,
    image: '',
    sale: 2,
    description: 'Mens winter Leathers jacket',
    price: 12,
  },
  {
    id: 4,
    image: '',
    sale: 2,
    description: 'Mens winter Leathers jacket',
    price: 12,
  },
  {
    id: 5,
    image: '',
    sale: 2,
    description: 'Mens winter Leathers jacket',
    price: 12,
  },
  {
    id: 6,
    image: '',
    sale: 2,
    description: 'Mens winter Leathers jacket',
    price: 12,
  },
  {
    id: 7,
    image: '',
    sale: 2,
    description: 'Mens winter Leathers jacket',
    price: 12,
  },
  {
    id: 8,
    image: '',
    sale: 2,
    description: 'Mens winter Leathers jacket',
    price: 12,
  },
];
export const ListProduct = () => {
  return (
    <ListProductContainer>
      <Title>New Products</Title>
      <ProductGird>
        {listProductData.map(product => (
          <ProductItem>
            <ProductBanner>
              <img src={BlogImage} alt='' />
              <ProductBadge></ProductBadge>
              <ProductActions>
                <ProductButton></ProductButton>
                <ProductButton></ProductButton>
                <ProductButton></ProductButton>
                <ProductButton></ProductButton>
              </ProductActions>
            </ProductBanner>
            <ProductContent>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>
                <LastPrice>{`$${
                  product.sale ? product.price - product.sale : product.price
                }`}</LastPrice>
                {product.sale && <Price>{`$${product.price}`}</Price>}
              </ProductPrice>
            </ProductContent>
          </ProductItem>
        ))}
      </ProductGird>
    </ListProductContainer>
  );
};
