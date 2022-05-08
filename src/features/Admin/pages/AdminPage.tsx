import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Header } from '../containers/Header';
import { SideBar } from '../containers/SideBar';
const AdminPageContainer = styled.div`
  ${tw`

  `}
`;
const RouterOutLet = styled.div`
  ${tw`
    overflow-y-auto
    mt-[60px]
    ml-[250px]
    w-[calc(100% - 250px)]
    min-h-[calc(100vh - 60px)]
    bg-[#f4f8fa]
    px-10
    py-6
  `}
`;
export const AdminPage = () => {
  return (
    <AdminPageContainer>
      <SideBar></SideBar>
      <Header></Header>
      <RouterOutLet>
        <Outlet></Outlet>
      </RouterOutLet>
    </AdminPageContainer>
  );
};
