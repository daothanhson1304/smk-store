import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FcEnteringHeavenAlive } from 'react-icons/fc';
const LogoContainer = styled.div`
  ${tw`
      px-6
      flex
      items-center
  `}
`;
const Icon = styled.div`
  ${tw`
    mr-2
    text-lg
  `}
`;
const TextField = styled.div`
  ${tw`
      text-white
      font-bold
      text-sm

  `}
`;
const SpecialText = styled.span`
  ${tw`
      text-[#506fce]
      font-medium
      text-lg
  `}
`;

export const Logo = () => {
  return (
    <LogoContainer>
      <Icon>
        <FcEnteringHeavenAlive></FcEnteringHeavenAlive>
      </Icon>
      <TextField>
        <SpecialText>Blueberry</SpecialText> CRM
      </TextField>
    </LogoContainer>
  );
};
