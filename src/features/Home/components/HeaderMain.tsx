import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { Logo } from '../../../components/Logo/index';
const HeaderMainContainer = styled.div`
  ${tw`
      mt-8
      flex
      justify-between
      items-center
      px-12
      py-6
  `}
  border-bottom: 1px solid #ededed;
  border-top: 1px solid #ededed;
`;
const HeaderMainLogo = styled.div`
  ${tw`

  `}
`;
const HeaderMainSearch = styled.div`
  ${tw`
    relative
  `}
  input {
    width: 600px;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 10px 50px 10px 10px;
  }
  svg {
    position: absolute;
    top: 16px;
    right: 20px;
  }
`;
const HeaderMainActions = styled.div`
  ${tw`
  flex
  items-center
  justify-around

  `}
`;
const Icon = styled.div`
  ${tw`
  text-3xl
  p-4
  cursor-pointer
`}
`;
export const HeaderMain = () => {
  return (
    <HeaderMainContainer>
      <HeaderMainLogo>
        <Logo></Logo>
      </HeaderMainLogo>
      <HeaderMainSearch>
        <input type='text' placeholder='Enter your product name...' />
        <BsSearch></BsSearch>
      </HeaderMainSearch>
      <HeaderMainActions>
        <Icon>
          <AiOutlineUser></AiOutlineUser>
        </Icon>
        <Icon>
          <AiOutlineShoppingCart></AiOutlineShoppingCart>
        </Icon>
      </HeaderMainActions>
    </HeaderMainContainer>
  );
};
