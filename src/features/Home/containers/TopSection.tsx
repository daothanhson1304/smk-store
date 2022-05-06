import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { NavBar } from '../../../components/NavBar/index';
import { Social } from '../components/Social';
import { HeaderMain } from '../components/HeaderMain';

import { Outlet, useNavigate } from 'react-router';
import { ROUTES } from 'constants/constants';

const TopSectionContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    min-h-full
    relative
  `}
`;

export const TopSection: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(ROUTES.LOGIN);
  };
  const handleCheckout = () => {
    navigate(ROUTES.CHECKOUT);
  };
  return (
    <>
      <TopSectionContainer>
        <Social />
        <HeaderMain
          onClickLoginButton={handleLogin}
          onClickCheckoutButton={handleCheckout}
        />
        <NavBar></NavBar>
      </TopSectionContainer>
      <Outlet />
    </>
  );
};
