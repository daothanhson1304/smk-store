import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import BlogImage from '../../../assets/images/blog-1.jpg';
import { listProductData, ROUTES } from 'constants/constants';
import {
  BiBadge,
  BiBandAid,
  BiPhone,
  BiShieldAlt2,
  BiSpa,
} from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Footer } from 'components/footer';
import { GrAdd } from 'react-icons/gr';
import { useAppSelector } from 'redux/store';
import { useNavigate } from 'react-router-dom';

const ProductDetailContent = styled.div`
  ${tw`
    grid
    grid-cols-2
    min-h-[80vh]
  `}
`;
const ProductDetailContainer = styled.div`
  ${tw`
  px-12
`}
`;
const ProductImage = styled.div`
  ${tw`
    col-span-1
    h-full

  `}
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;
const ProductContent = styled.div`
  ${tw`

    px-12
  `}
`;
const ProductTitle = styled.div`
  ${tw`
      uppercase
      text-3xl
      text-black
      text-center
      font-bold
  `}
`;
const ProductDescription = styled.div`
  ${tw`
    text-[#787878]
    my-3
    flex
  `}
`;
const ProductPrice = styled.div`
  ${tw`
  flex
  items-end
  my-8
  `}
`;
const ProductButton = styled.button`
  ${tw`
    uppercase
    text-white
    text-sm
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
const OtherProduct = styled.div`
  ${tw`
      grid
      grid-cols-3
      gap-4
      w-full
      col-span-3
    `}
`;
const Label = styled.div`
  ${tw`
  font-bold
  mr-5
  text-black
  `}
`;
const ProductFooter = styled.div`
  ${tw`
      mt-6
  `}
`;
const Icon = styled.div`
  ${tw`
  text-black
  `}
`;
const Delivery = styled.div`
  ${tw`
    flex
    justify-between
    border-t-2
    border-gray-500
    py-5
  `}
  p {
    font-weight: 700;
  }
`;
const FreeReturns = styled.div`
  ${tw`
   flex
    justify-between
    border-t-2
    border-gray-500
    py-5
  `}
  p {
    font-weight: 700;
  }
`;

const ServicesContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    px-12
    py-10
    mt-16
    border-2
    rounded-2xl
    border-gray-300
  `}
`;
const ServiceItem = styled.div`
  ${tw`
    flex
    flex-col
    items-center
  `}
`;
const ServiceIcon = tw.div`
  cursor-pointer
  text-3xl
  p-4
  text-[#ff8f9c]
`;
const ServiceContent = tw.div`

`;
const ServiceTitle = tw.p`
  font-bold
  text-center
`;
const ServiceDes = tw.p`
text-center

`;
const SocialIcon = styled.div`
  ${tw`
    p-2
    m-1
    bg-gray-100
    cursor-pointer
    border-radius[5px]
  `}
`;
const Social = styled.div`
  ${tw`
      mt-8
      flex
      items-center
  `}
`;
const SocialTitle = styled.div`
  ${tw`
  mr-5
  text-xl
`}
`;
const SocialGroup = styled.div`
  ${tw`
    flex
`}
`;
export const ProductDetail = () => {
  const product = listProductData[0];
  const { isAuthUser } = useAppSelector(state => state.authReducer);
  const navigate = useNavigate();
  const handleAddProduct = () => {
    const path = isAuthUser ? ROUTES.CHECKOUT : ROUTES.LOGIN;
    navigate(path);
  };
  return (
    <>
      <ProductDetailContainer>
        <ProductDetailContent>
          <ProductImage>
            <img src={BlogImage} alt='' />
          </ProductImage>
          <ProductContent>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>
              <Label>Price:</Label>
              <LastPrice>{`$${
                product.sale ? product.price - product.sale : product.price
              }`}</LastPrice>
              {product.sale && <Price>{`$${product.price}`}</Price>}
            </ProductPrice>
            <ProductDescription>
              <Label>Description:</Label>
              {product.description}
            </ProductDescription>
            <ProductFooter>
              <Delivery>
                <p>Delivery</p>
                <Icon>
                  <GrAdd />
                </Icon>
              </Delivery>
              <FreeReturns>
                <p>Free returns</p>
                <Icon>
                  <GrAdd />
                </Icon>
              </FreeReturns>
            </ProductFooter>
            <ProductButton onClick={handleAddProduct}>
              Add to cart
            </ProductButton>
            <Social>
              <SocialTitle>Share</SocialTitle>
              <SocialGroup>
                <SocialIcon>
                  <BsFacebook />
                </SocialIcon>
                <SocialIcon>
                  <BsTwitter />
                </SocialIcon>
                <SocialIcon>
                  <BsInstagram />
                </SocialIcon>
              </SocialGroup>
            </Social>
          </ProductContent>
        </ProductDetailContent>
        <ServicesContainer>
          <ServiceItem>
            <ServiceIcon>
              <BiBadge />
            </ServiceIcon>
            <ServiceContent>
              <ServiceTitle>Worldwide Delivery</ServiceTitle>
              <ServiceDes>For Order Over $100</ServiceDes>
            </ServiceContent>
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>
              <BiBandAid />
            </ServiceIcon>
            <ServiceContent>
              <ServiceTitle>Next Day delivery</ServiceTitle>
              <ServiceDes>UK Orders Only</ServiceDes>
            </ServiceContent>
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>
              <BiPhone />
            </ServiceIcon>
            <ServiceContent>
              <ServiceTitle>Best Online Support</ServiceTitle>
              <ServiceDes>Hours: 8AM - 11PM</ServiceDes>
            </ServiceContent>
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>
              <BiShieldAlt2 />
            </ServiceIcon>
            <ServiceContent>
              <ServiceTitle>Return Policy</ServiceTitle>
              <ServiceDes>Easy & Free Return</ServiceDes>
            </ServiceContent>
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>
              <BiSpa />
            </ServiceIcon>
            <ServiceContent>
              <ServiceTitle>30% money back</ServiceTitle>
              <ServiceDes>For Order Over $100</ServiceDes>
            </ServiceContent>
          </ServiceItem>
        </ServicesContainer>
      </ProductDetailContainer>
      <Footer></Footer>
    </>
  );
};
