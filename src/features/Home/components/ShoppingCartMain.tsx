import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { listProductData } from 'constants/constants';
import { CartItem } from './CartItem';
const ShoppingCartMainContainer = styled.div`
  ${tw`
    mt-8
    min-h-screen
  `}
`;
const ShoppingCartText = styled.div`
  ${tw`
  font-medium
  text-2xl
  `}
`;
const ShoppingCartSubText = styled.div`
  ${tw`
    text-lg
    mt-2
  `}
`;

const ShoppingCartTitle = styled.div`
  ${tw`
  `}
`;
const ListCart = styled.div`
  ${tw`
    max-h-[80vh]
    mt-8
    overflow-auto
    px-8
    rounded-xl
`}
`;
export const ShoppingCartMain = () => {
  const listItem = listProductData.slice(0, 4);
  return (
    <ShoppingCartMainContainer>
      <ShoppingCartTitle>
        <ShoppingCartText>Shopping Cart</ShoppingCartText>
        <ShoppingCartSubText>You have 4 items in your cart</ShoppingCartSubText>
        <ListCart>
          {listItem.map(item => {
            return <CartItem />;
          })}
        </ListCart>
      </ShoppingCartTitle>
    </ShoppingCartMainContainer>
  );
};
