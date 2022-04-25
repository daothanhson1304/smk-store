import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {
  BiBadge,
  BiBandAid,
  BiPhone,
  BiShieldAlt2,
  BiSpa,
} from 'react-icons/bi';
const OurServicesContainer = styled.div`
  ${tw`
    w-full
    min-h-full
    px-12
  `}
`;
const Divider = styled.div`
  ${tw`
    w-full
    h-[1px]
    bg-gray-400
    mt-2
  `}
`;
const ServicesContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    px-12
    py-10
    mt-8
    border-2
    rounded-2xl
    border-gray-400
  `}
`;
const ServiceItem = styled.div`
  ${tw`
    flex
    flex-col
    items-center
  `}
`;
const ServiceIcon = tw.div`
  cursor-pointer
  text-3xl
  p-4
`;
const ServiceContent = tw.div`

`;
const ServiceTitle = tw.p`
  font-bold
  text-center
`;
const ServiceDes = tw.p`
text-center

`;
export const OurServices = () => {
  return (
    <OurServicesContainer>
      Our Services
      <Divider></Divider>
      <ServicesContainer>
        <ServiceItem>
          <ServiceIcon>
            <BiBadge />
          </ServiceIcon>
          <ServiceContent>
            <ServiceTitle>Worldwide Delivery</ServiceTitle>
            <ServiceDes>For Order Over $100</ServiceDes>
          </ServiceContent>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon>
            <BiBandAid />
          </ServiceIcon>
          <ServiceContent>
            <ServiceTitle>Next Day delivery</ServiceTitle>
            <ServiceDes>UK Orders Only</ServiceDes>
          </ServiceContent>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon>
            <BiPhone />
          </ServiceIcon>
          <ServiceContent>
            <ServiceTitle>Best Online Support</ServiceTitle>
            <ServiceDes>Hours: 8AM - 11PM</ServiceDes>
          </ServiceContent>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon>
            <BiShieldAlt2 />
          </ServiceIcon>
          <ServiceContent>
            <ServiceTitle>Return Policy</ServiceTitle>
            <ServiceDes>Easy & Free Return</ServiceDes>
          </ServiceContent>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon>
            <BiSpa />
          </ServiceIcon>
          <ServiceContent>
            <ServiceTitle>30% money back</ServiceTitle>
            <ServiceDes>For Order Over $100</ServiceDes>
          </ServiceContent>
        </ServiceItem>
      </ServicesContainer>
    </OurServicesContainer>
  );
};
