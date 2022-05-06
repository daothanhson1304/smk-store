import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BsArrowRight } from 'react-icons/bs';
import PayPal from 'assets/images/paypal.png';
import MasterCard from 'assets/images/master.png';
import Visa from 'assets/images/visa.png';
import { AiOutlineCheck } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import { ROUTES } from 'constants/constants';

const CardDetailContainer = styled.div`
  ${tw`
    rounded-3xl
    bg-[#565cba]
    text-white
    px-8
    py-10
    col-span-4
    max-h-[100vh]
  `}
  input {
    background-color: #6268c5;
    border: none;
    outline: none;
    width: 100%;
    padding: 10px 30px;
    border-radius: 10px;
  }
  .cardActive {
    border: 2px solid white;
  }
`;
const CardTitle = styled.div`
  ${tw`
    text-2xl
    font-semibold
    mb-8
  `}
`;
const Group = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    gap-4
    my-2
  `}
`;
const CardGroup = styled.div`
  ${tw`
    my-3
  `}
`;

const CardLabel = styled.div`
  ${tw`
    mb-2
  `}
`;

const CardInfo = styled.div`
  ${tw`

  `}
`;
const CardTypesGroup = styled.div`
  ${tw`

  `}
`;
const PaymentAction = styled.div`
  ${tw`
    flex items-center
  `}
`;
const Icon = styled.div`
  ${tw`
      ml-3
      text-white
  `}
`;
const TotalPrice = styled.div`
  ${tw`
    font-bold
    text-2xl
  `}
`;
const PaymentButton = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    px-8
    py-2
    mt-4
    bg-[#4fe1c0]
    rounded-xl
    cursor-pointer
  `}
`;
const PaymentPrice = styled.div`
  ${tw`
    text-xl
  `}
`;
const PaymentTitle = styled.div`
  ${tw`
    text-xl
  `}
`;
const PaymentInfo = styled.div`
  ${tw`

  `}
`;
const CardTypes = styled.div`
  ${tw`
      flex
      items-center
      justify-between
  `}
  img {
    width: 120px;
    height: 100px;
    object-fit: contain;
    border: 1px solid #6066c4;
    padding: 20px 30px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      border: 2px solid white;
    }
  }
`;
const CardIcon = styled.div`
  ${tw`
    absolute
    right-2
    top-3
  `}
`;
const CardType = styled.div`
  ${tw`
    relative
  `}
`;
const Payment = styled.div`
  ${tw`
      pt-6
      mt-6
  `}
  border-top: 1px solid #6066c4;
`;
export const CardDetail = () => {
  const navigate = useNavigate();
  const [listCard, setListCard] = React.useState([
    { id: 1, image: PayPal, active: true },
    { id: 2, image: MasterCard, active: false },
    { id: 3, image: Visa, active: false },
  ]);
  const handleChooseCard = (id: number) => {
    const newListCard = listCard.map(card => {
      let active = false;
      if (id === card.id) active = true;
      return { ...card, active };
    });
    setListCard(newListCard);
  };
  const handleCheckout = () => {
    navigate(ROUTES.CHECKOUT_SUCCESS);
  };
  return (
    <CardDetailContainer>
      <CardTitle>Card Detail</CardTitle>
      <CardTypesGroup>
        <CardLabel>Card type</CardLabel>
        <CardTypes>
          {listCard.map(card => {
            return (
              <CardType>
                <img
                  src={card.image}
                  className={card.active ? 'cardActive' : ''}
                  alt=''
                  onClick={() => {
                    handleChooseCard(card.id);
                  }}
                />
                {card.active && (
                  <CardIcon>
                    <AiOutlineCheck></AiOutlineCheck>
                  </CardIcon>
                )}
              </CardType>
            );
          })}
        </CardTypes>
      </CardTypesGroup>
      <CardInfo>
        <CardGroup>
          <CardLabel>Name on Card</CardLabel>
          <input type='text' />
        </CardGroup>
        <CardGroup>
          <CardLabel>Card Number</CardLabel>
          <input type='text' />
        </CardGroup>
        <Group>
          <CardGroup>
            <CardLabel>Expiration Date</CardLabel>
            <input type='text' />
          </CardGroup>
          <CardGroup>
            <CardLabel>CVV</CardLabel>
            <input type='text' />
          </CardGroup>
        </Group>
      </CardInfo>
      <Payment>
        <PaymentInfo>
          <Group>
            <PaymentTitle>Subtotal</PaymentTitle>
            <PaymentPrice>$12</PaymentPrice>
          </Group>
          <Group>
            <PaymentTitle>Shipping</PaymentTitle>
            <PaymentPrice>$12</PaymentPrice>
          </Group>
          <Group>
            <PaymentTitle>Total (tax incl.)</PaymentTitle>
            <PaymentPrice>$12</PaymentPrice>
          </Group>
        </PaymentInfo>
        <PaymentButton onClick={handleCheckout}>
          <TotalPrice>$1232</TotalPrice>
          <PaymentAction>
            <p>Checkout</p>
            <Icon>
              <BsArrowRight></BsArrowRight>
            </Icon>
          </PaymentAction>
        </PaymentButton>
      </Payment>
    </CardDetailContainer>
  );
};
