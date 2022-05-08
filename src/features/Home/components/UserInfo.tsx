import { IUserInfo } from 'features/Auth/types/types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AiOutlineLogout } from 'react-icons/ai';
interface IProps {
  userInfo: IUserInfo;
  adminPage?: boolean;
}
const UserInfoContainer = styled.div`
  ${tw`

    flex
    items-center
    justify-center
  `}
`;
const UserName = styled.div`
  ${tw`
      text-xl
      font-medium
  `}
`;
const UserEmail = styled.div`
  ${tw`
      text-sm
  `}
`;
const UserContent = styled.div`
  ${tw`
    ml-3
  `}
`;
const Icon = styled.div`
  ${tw`
    text-3xl
  p-4
  cursor-pointer
  `}
`;
const UserAvatar = styled.div`
  ${tw`
    w-12
    h-12
    bg-[#ff8f9c]
    rounded-full
    text-white
    uppercase
    flex
    items-center
    justify-center
  `}
`;
export const UserInfo: React.FC<IProps> = ({ userInfo, adminPage }) => {
  return (
    <UserInfoContainer>
      <UserAvatar>{userInfo.username.substring(0, 2)}</UserAvatar>
      <UserContent>
        <UserName>{userInfo.username}</UserName>
        <UserEmail>{userInfo.email}</UserEmail>
      </UserContent>
      {!adminPage && (
        <Icon>
          <AiOutlineLogout></AiOutlineLogout>
        </Icon>
      )}
    </UserInfoContainer>
  );
};
