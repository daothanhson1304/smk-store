import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { listProductData } from 'constants/constants';
import { CartItem } from './CartItem';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { hiddenLoading, showLoading } from 'features/App/redux/AppSlice';
import { deleteInvoice, getAllInvoice } from 'features/Admin/redux/AdminThunk';
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
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }
`;
export const ShoppingCartMain = () => {
  const { orders } = useAppSelector((state) => state.adminReducer);
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.authReducer.userInfo);
  React.useEffect(() => {
    const getData = async () => {
      dispatch(showLoading());
      const param = id ? id : 0;
      await dispatch(getAllInvoice(param));
      dispatch(hiddenLoading());
    };
    getData();
  }, []);
  const handleDeleteOrder = async (id: number) => {
    dispatch(showLoading());
    await dispatch(deleteInvoice(id));
    dispatch(hiddenLoading());
  };
  return (
    <ShoppingCartMainContainer>
      <ShoppingCartTitle>
        <ShoppingCartText>Shopping Cart</ShoppingCartText>
        <ShoppingCartSubText>{`You have ${
          orders.filter((order) => order.status === 0).length
        } items in your cart`}</ShoppingCartSubText>
        <ListCart>
          {orders &&
            orders
              .filter((order) => order.status === 0)
              .map((order) => {
                return <CartItem order={order} onDelete={handleDeleteOrder} />;
              })}
        </ListCart>
        <ShoppingCartText>History</ShoppingCartText>
        <ShoppingCartSubText>{`You have ${
          orders.filter((order) => order.status === 1).length
        } items in your cart`}</ShoppingCartSubText>
        <ListCart>
          {orders &&
            orders
              .filter((order) => order.status === 1)
              .map((order) => {
                return <CartItem order={order} hiddenAction={true} />;
              })}
        </ListCart>
      </ShoppingCartTitle>
    </ShoppingCartMainContainer>
  );
};
