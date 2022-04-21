import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BannerImageOne from '../../assets/images/banner-1.jpg';
import BannerImageTwo from '../../assets/images/banner-2.jpg';
import BannerImageThree from '../../assets/images/banner-3.jpg';

import styled from 'styled-components';
import tw from 'twin.macro';

const BannerContainer = styled.div`
  ${tw`
    // px-4
  `}
  .carousel-root {
    width: 80%;
    margin: auto;
    .carousel {
      .slide {
        text-align: start;
        img {
          border-radius: 10px;
          height: 400px;
          object-fit: cover;
        }
      }
    }
  }
`;

const Item = styled.div`
  ${tw`
        flex
        flex-col
    `}

  img {
    ${tw`
            max-w-full
            max-h-full
        `}
  }
`;

const Description = styled.div`
  ${tw`
    bottom-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    max-w-[400px]
    rounded-2xl
    left-16
    transform[translateY(50%)]
    absolute
    flex
    flex-col
    items-start
    `}
  .sub-title {
    color: #ff8f9c;
    font-size: 30px;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }
  .title {
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 10px;
  }
  .text {
    display: block;
    color: #787878;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

export const Banner = () => {
  return (
    <BannerContainer>
      <Carousel dynamicHeight={false}>
        <Item>
          <img src={BannerImageOne} />
          <Description>
            <p className='sub-title'>Trending Item</p>
            <h2 className='title'>WOMEN LATEST FASHION SALE</h2>
            <p className='text'>starting at 18/06</p>
          </Description>
        </Item>
        <Item>
          <img src={BannerImageTwo} />
          <Description>
            <p className='sub-title'>Trending Accessories</p>
            <h2 className='title'>MODERN SUNGLASSES</h2>
            <p className='text'>starting at 18/06</p>
          </Description>
        </Item>
        <Item>
          <img src={BannerImageThree} />
          <Description>
            <p className='sub-title'>Sale Offer</p>
            <h2 className='title'>NEW FASHION SUMMER SALE</h2>
            <p className='text'>starting at 18/06</p>
          </Description>
        </Item>
      </Carousel>
    </BannerContainer>
  );
};
