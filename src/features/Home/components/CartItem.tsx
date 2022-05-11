import { listProductData } from 'constants/constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import BannerImageOne from '../../../assets/images/banner-1.jpg';
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { IOrder } from 'features/Admin/types/types';
const CartItemContainer = styled.div`
  ${tw`
      grid
      grid-cols-10
      my-5
      rounded-3xl
      px-7
      py-5
      shadow-xl
      gap-6
  `}
`;
const ProductInfo = styled.div`
  ${tw`
    col-span-6
    flex
    items-center
  `}
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 15px;
    margin-right: 30px;
  }
`;
const ProductContent = styled.div`
  ${tw`

`}
`;
const ProductTitle = styled.div`
  ${tw`
  font-bold
`}
`;
const ProductDescription = styled.div`
  ${tw`

`}
`;
const ProductActions = styled.div`
  ${tw`
  flex
  items-center
  justify-around
  col-span-4
`}
`;
const ProductQuantity = styled.div`
  ${tw`
  flex
  items-center
`}
`;
const ProductTotalPrice = styled.div`
  ${tw`
    text-xl
    font-bold
`}
`;
const ProductDeleteButton = styled.div`
  ${tw`

`}
`;
const Icon = styled.div`
  ${tw`
  p-3
  cursor-pointer
  text-xl
  `}
`;
const Quantity = styled.div`
  ${tw`
    w-8
    h-8
    flex
    items-center
    justify-center
    rounded-xl
`}
  border: 1px solid #ededed;
`;
interface IProps {
  order: IOrder;
  onDelete?: (id: number) => void;
  hiddenAction?: boolean;
}
export const CartItem: React.FC<IProps> = ({
  order,
  onDelete,
  hiddenAction,
}) => {
  return (
    <CartItemContainer>
      <ProductInfo>
        <img src={order.productImage} alt='' />
        <ProductContent>
          <ProductTitle>{order.productTitle}</ProductTitle>
          <ProductDescription>{order.productDes}</ProductDescription>
        </ProductContent>
      </ProductInfo>
      {!hiddenAction && (
        <ProductActions>
          <ProductQuantity>
            <Icon>
              <AiOutlinePlus></AiOutlinePlus>
            </Icon>
            <Quantity>{order.quantity}</Quantity>
            <Icon>
              <AiOutlineMinus></AiOutlineMinus>
            </Icon>
          </ProductQuantity>
          <ProductTotalPrice>{order.totalPrice}</ProductTotalPrice>
          <ProductDeleteButton
            onClick={() => {
              const id = order.id ? order.id : 0;
              onDelete && onDelete(id);
            }}
          >
            <Icon>
              <AiOutlineDelete></AiOutlineDelete>
            </Icon>
          </ProductDeleteButton>
        </ProductActions>
      )}
    </CartItemContainer>
  );
};
