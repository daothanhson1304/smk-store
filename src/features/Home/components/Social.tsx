import React from 'react';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsChevronCompactDown,
} from 'react-icons/bs';
import styled from 'styled-components';
import tw from 'twin.macro';
const SocialContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    text-gray-600
    px-12
  `}
`;
const LeftSocialContent = styled.div`
  ${tw`
      flex
  `}
`;
const RightSocialContent = styled.div`
  ${tw`
  flex
  items-center
  cursor-pointer
  `}
`;
const CenterSocialContent = styled.div`
  ${tw`
    text-sm
  `}
`;
const SocialIcon = styled.div`
  ${tw`
    p-2
    m-1
    bg-gray-100
    cursor-pointer
    border-radius[5px]
  `}
`;
export const Social = () => {
  return (
    <SocialContainer>
      <LeftSocialContent>
        <SocialIcon>
          <BsFacebook />
        </SocialIcon>
        <SocialIcon>
          <BsTwitter />
        </SocialIcon>
        <SocialIcon>
          <BsInstagram />
        </SocialIcon>
        <SocialIcon>
          <BsLinkedin />
        </SocialIcon>
      </LeftSocialContent>
      <CenterSocialContent>
        FREE SHIPPING THIS WEEK ORDER OVER - $55
      </CenterSocialContent>
      <RightSocialContent>
        English
        <BsChevronCompactDown></BsChevronCompactDown>
      </RightSocialContent>
    </SocialContainer>
  );
};
