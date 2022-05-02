import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import { Banner } from 'features/Home/components/Banner';
import { Blog } from 'features/Home/components/Blog';
import { OurServices } from 'features/Home/components/OurServices';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Footer } from '../../components/footer';
import { useAppDispatch } from 'store/store';
import { signIn } from 'features/Auth/redux/SignInSlice';
const HomeContainer = styled.div`
  ${tw`
    pt-3
  `}
`;

export const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(signIn({ username: 'daoson', password: 'daoson' }));
  }, []);
  return (
    <HomeContainer>
      <Banner></Banner>
      <OurServices></OurServices>
      <Blog></Blog>
      <Footer />
    </HomeContainer>
  );
};
