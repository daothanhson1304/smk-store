import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IoIosArrowRoundBack } from 'react-icons/io';
const ShoppingCartHeaderContainer = styled.div`
  ${tw`
    flex
    items-center
    text-xl
    pb-4
  `}
  border-bottom: 1px solid #ededed;
`;
const ShoppingCartTitle = styled.div`
  ${tw`
  `}
`;
const Icon = styled.div`
  ${tw`
  mr-7
  text-3xl
`}
`;
export const ShoppingCartHeader = () => {
  return (
    <ShoppingCartHeaderContainer>
      <Icon>
        <IoIosArrowRoundBack />
      </Icon>
      <ShoppingCartTitle>Continue Shopping</ShoppingCartTitle>
    </ShoppingCartHeaderContainer>
  );
};
