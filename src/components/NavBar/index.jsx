import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Link
} from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../responsive';
import { slide as Menu } from 'react-burger-menu';
import styles from './menuStyles';
import { ROUTES } from 'constants/constants';

const Container = styled.div`
  width: 90%;
  ${tw`
        flex
        h-20
        pl-6
        pr-6
        pt-4
        items-center
        self-center
        justify-center
        mb-8
    `};
`;

const NavItems = tw.ul`
    list-none
    w-full
    h-auto
    lg:w-auto
    lg:h-full
    flex
    lg:ml-20
    justify-center
    items-center
`;

const NavItem = tw.li`
    lg:mr-8
    flex
    items-center
    justify-center
    min-h-full
    cursor-pointer
    font-medium
    text-4xl
    lg:text-xl
    transition-colors
    transition-duration[300ms]
    // hover:text-gray-200
    box-content
    mb-2
    lg:mb-0
`;

export function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  const navItems = (
    <NavItems>
      <NavItem>
        <Link to={ROUTES.HOME}>Home</Link>
      </NavItem>
      <NavItem>
        <Link to={ROUTES.PRODUCTS}>Products</Link>
      </NavItem>
      <NavItem>
        About
      </NavItem>
      <NavItem>
        Blog
      </NavItem>
    </NavItems>
  );

  return (
    <Container>
      {isMobile && (
        <Menu styles={styles}>
          {navItems}
        </Menu>
      )}
      {!isMobile && navItems}
    </Container>
  );
}
