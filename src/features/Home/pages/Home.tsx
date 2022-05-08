import React, { useEffect } from 'react';
import { Banner } from 'features/Home/components/Banner';
import { Blog } from 'features/Home/components/Blog';
import { OurServices } from 'features/Home/components/OurServices';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Footer } from '../../../components/footer';
const HomeContainer = styled.div`
  ${tw`
    pt-3
  `}
`;

export const Home = () => {
  useEffect(() => {}, []);
  return (
    <HomeContainer>
      <Banner></Banner>
      <OurServices></OurServices>
      <Blog></Blog>
      <Footer />
    </HomeContainer>
  );
};
