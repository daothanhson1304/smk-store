import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SideBarTop } from '../components/SideBarTop';
import { SideBarContent } from './SideBarContent';
const SideBarContainer = styled.div`
  ${tw`
    fixed
    top-0
    left-0
    bottom-0
    w-[250px]
    bg-[#082a63]
    text-[#6a80a9]
    py-3
  `}
`;
export const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarTop></SideBarTop>
      <SideBarContent></SideBarContent>
    </SideBarContainer>
  );
};
