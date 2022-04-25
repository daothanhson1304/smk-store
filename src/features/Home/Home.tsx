import React from 'react';
import { Outlet } from 'react-router';
import { Banner } from 'src/features/Home/components/Banner';
import { Blog } from 'src/features/Home/components/Blog';
import { OurServices } from 'src/features/Home/components/OurServices';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Footer } from '../../components/footer';
const HomeContainer = styled.div`
  ${tw`
    pt-3
  `}
`;
export const Home = () => {
  return (
    <HomeContainer>
      <Banner></Banner>
      <OurServices></OurServices>
      <Blog></Blog>
      <Footer />
    </HomeContainer>
  );
};
