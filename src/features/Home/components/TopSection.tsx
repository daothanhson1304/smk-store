import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'react-scroll';
import { BsArrowDownCircle } from 'react-icons/bs';
import { NavBar } from '../../../components/NavBar/index';
import { Social } from './Social';
import { HeaderMain } from './HeaderMain';

import { Banner } from './Banner';
import { Outlet } from 'react-router';

const TopSectionContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    min-h-full
    relative
  `}
`;

const InfoSection = styled.div`
  ${tw`
    absolute
    top[150px]
    left-3
    lg:top[150px]
    lg:right-10
    lg:left-auto
    2xl:right-60
    2xl:top[240px]
    2xl:left-auto
  `}
`;
const FloatingText = styled.h1`
  ${tw`
    m-0
    font-black
    text-white
    font-size[60px]
    line-height[25px]
    lg:font-size[125px]
    lg:line-height[90px]
    2xl:font-size[170px]
    2xl:line-height[125px]
    flex
    items-center
  `}
`;
const OutlinedTextSvg = styled.svg`
  font: bold 100px Century 'Archivo Narrow', Arial;
  ${tw`
        width[550px]
        height[100px]
        lg:width[580px]
        lg:height[110px]
        2xl:width[550px]
        2xl:height[110px]
        flex
    `};
  overflow: overlay;
  text {
    max-height: 100%;
    flex: 1;
    fill: none;
    stroke: white;
    stroke-width: 2px;
    stroke-linejoin: round;
    z-index: 99;
    ${tw`
      2xl:transform[translateY(113px)]
      lg:transform[translateY(97px)]
      transform[translateY(71px)]
    `};
    text-shadow: 0px 0px 0px rgba(255, 255, 255, 0.5);
  }
`;

const DescriptionText = styled.p`
  ${tw`
    text-xl
    lg:text-lg
    text-white
    text-opacity-80
    mt-10
    max-w-xs
    lg:max-w-lg
    2xl:max-w-xl
  `}
`;
const ViewMoreButton = styled.button`
  ${tw`
        absolute
        bottom-4
        left-1/2
        -translate-x-1/2
        text-4xl
        transition-colors
        duration-200
        hover:text-green-400
    `};
`;

export const TopSection: React.FC = () => {
  return (
    <>
      <TopSectionContainer>
        <Social />
        <HeaderMain />
        <NavBar></NavBar>
      </TopSectionContainer>
      <Outlet />
    </>
  );
};
