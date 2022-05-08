import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {
  AiOutlineMenu,
  AiOutlineSetting,
  AiOutlineNotification,
} from 'react-icons/ai';
import { UserInfo } from 'features/Home/components/UserInfo';
const HeaderContainer = styled.div`
  ${tw`
    fixed
    ml-[250px]
    w-[calc(100% - 250px )]
    px-6
    h-[60px]
    py-2
    flex
    items-center
    bg-[white]
    justify-between
  `}
`;
const Icon = styled.div`
  ${tw`
      text-xl
      cursor-pointer
      mx-3
  `}
`;
const HeaderRight = styled.div`
  ${tw`
      flex
      items-center
  `}
`;
const GroupIcon = styled.div`
  ${tw`
    flex
    items-center
    mr-4
  `}
`;
export const Header = () => {
  return (
    <HeaderContainer>
      <Icon>
        <AiOutlineMenu></AiOutlineMenu>
      </Icon>
      <HeaderRight>
        <GroupIcon>
          <Icon>
            <AiOutlineNotification></AiOutlineNotification>
          </Icon>
          <Icon>
            <AiOutlineSetting></AiOutlineSetting>
          </Icon>
        </GroupIcon>
        <UserInfo
          userInfo={{ username: 'Admin', email: 'admin' }}
          adminPage={true}
        ></UserInfo>
      </HeaderRight>
    </HeaderContainer>
  );
};
