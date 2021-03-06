import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { Logo } from '../../../components/Logo/index';
import { useAppSelector } from 'redux/store';
import { UserInfo } from '../components/UserInfo';
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
interface IProps {
  onClickLoginButton: () => void;
  onClickCheckoutButton: () => void;
}
export const HeaderMain: React.FC<IProps> = ({
  onClickLoginButton,
  onClickCheckoutButton,
}) => {
  const { isAuthUser, userInfo } = useAppSelector(state => state.authReducer);
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
        {isAuthUser ? (
          <UserInfo userInfo={userInfo}></UserInfo>
        ) : (
          <Icon onClick={onClickLoginButton}>
            <AiOutlineUser></AiOutlineUser>
          </Icon>
        )}

        <Icon onClick={onClickCheckoutButton}>
          <AiOutlineShoppingCart></AiOutlineShoppingCart>
        </Icon>
      </HeaderMainActions>
    </HeaderMainContainer>
  );
};
