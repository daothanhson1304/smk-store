import React from 'react';
import { Blog } from 'src/containers/Blog/Blog';
import { OurServices } from 'src/containers/OurServices/OurServices';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Footer } from '../../components/footer';
import { TopSection } from '../../containers/TopSection/TopSection';
const HomeContainer = styled.div`
  ${tw`
    pt-3
  `}
`;
export const Home = () => {
  return (
    <HomeContainer>
      <TopSection />
      <OurServices></OurServices>
      <Blog></Blog>
      <Footer />
    </HomeContainer>
  );
};
