import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { NavBar } from '../../../components/NavBar/index';
import { Social } from '../components/Social';
import { HeaderMain } from './HeaderMain';

import { Outlet, useNavigate } from 'react-router';
import { ROUTES } from 'constants/constants';
import { useAppSelector } from 'redux/store';

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
  const { isAuthUser } = useAppSelector(state => state.authReducer);

  const handleLogin = () => {
    navigate(ROUTES.LOGIN);
  };
  const handleCheckout = () => {
    const path = isAuthUser ? ROUTES.CHECKOUT : ROUTES.LOGIN;
    navigate(path);
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
