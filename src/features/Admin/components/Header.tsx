import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
interface IProps {
  title: string;
  buttonText?: string;
  handleAdd?: () => void;
}
const HeaderContainer = styled.div`
  ${tw`
  flex
  items-center
  justify-between
  `}
`;
const Button = styled.button`
  ${tw`
    text-white
    bg-[#0e357b]

    px-4
    py-3
    rounded-xl

  `}
`;
const Title = styled.button`
  ${tw`
      text-xl

  `}
`;
export const Header: React.FC<IProps> = ({ title, buttonText, handleAdd }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {buttonText && (
        <Button
          onClick={() => {
            handleAdd && handleAdd();
          }}
        >
          {buttonText}
        </Button>
      )}
    </HeaderContainer>
  );
};
