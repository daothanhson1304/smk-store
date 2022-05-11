import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {
  AiOutlineUsergroupDelete,
  AiOutlinePieChart,
  AiOutlineGold,
  AiOutlineMonitor,
  AiOutlineShareAlt,
  AiOutlineLeft,
} from 'react-icons/ai';
import { Routes, useNavigate } from 'react-router';
import { ROUTES } from 'constants/constants';
const SideBarContentContainer = styled.div`
  ${tw`
    mt-8
  `}
`;
const Title = styled.div`
  ${tw`
  px-6
  `}
`;
const MenuBar = styled.div`
  ${tw`
  `}
`;
const TextField = styled.div`
  ${tw`
  `}
`;
const Icon = styled.div`
  ${tw`
    text-xl
    mr-4
  `}
`;
const NavMenuContent = styled.div`
  ${tw`
  flex
  items-center
  `}
`;
const NavMenu = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    pl-7
    my-5
    cursor-pointer
    hover:text-white
  `}
`;

const menuBar = [
  { id: 1, icon: <AiOutlineGold />, text: 'Analytics', active: true },
  {
    id: 2,
    icon: <AiOutlineUsergroupDelete />,
    text: 'Customers',
    active: false,
  },
  { id: 3, icon: <AiOutlineMonitor />, text: 'Orders', active: false },
  { id: 4, icon: <AiOutlinePieChart />, text: 'Products', active: false },
  { id: 5, icon: <AiOutlineShareAlt />, text: 'Invoices', active: false },
];
export const SideBarContent = () => {
  const [menuBar, setMenuBar] = React.useState([
    {
      id: 1,
      icon: <AiOutlineGold />,
      text: 'Analytics',
      active: true,
    },
    {
      id: 2,
      icon: <AiOutlineUsergroupDelete />,
      text: 'Customers',
      active: false,
      path: ROUTES.CUSTOMERS,
    },
    {
      id: 3,
      icon: <AiOutlineMonitor />,
      text: 'Orders',
      active: false,
    },
    {
      id: 4,
      icon: <AiOutlinePieChart />,
      text: 'Products',
      active: false,
      path: ROUTES.PRODUCTS_ADMIN,
    },
    {
      id: 5,
      icon: <AiOutlineShareAlt />,
      text: 'Invoices',
      active: false,
    },
  ]);
  const navigate = useNavigate();
  const handleClickNavBar = (currentItem: any) => {
    const newMenuBar = menuBar.map((item) => {
      const active = currentItem.id === item.id ? true : false;
      return { ...item, active };
    });
    setMenuBar(newMenuBar);
    currentItem.path && navigate(currentItem.path);
  };
  return (
    <SideBarContentContainer>
      <Title>Management</Title>
      <MenuBar>
        {menuBar.map((item) => {
          return (
            <NavMenu
              onClick={() => {
                handleClickNavBar(item);
              }}
            >
              <NavMenuContent>
                <Icon>{item.icon}</Icon>
                <TextField>{item.text}</TextField>
              </NavMenuContent>
              {item.active && (
                <Icon>
                  <AiOutlineLeft></AiOutlineLeft>
                </Icon>
              )}
            </NavMenu>
          );
        })}
      </MenuBar>
    </SideBarContentContainer>
  );
};
