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
import Avatar from 'assets/images/banner-1.jpg';
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
  text-[#ff8f9c]
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
const OurServicesDescription = styled.div`
  ${tw`

`}
`;
const OurServicesSubTitle = styled.div`
  ${tw`
    text-lg
    font-medium
`}
`;
const OurServicesContent = styled.div`
  ${tw`

`}
`;
const OurServicesIcon = styled.div`
  ${tw`
    text-3xl
    p-5
    text-[#ff8f9c]
`}
`;
const OurServicesItem = styled.div`
  ${tw`
    flex
    items-center
`}
`;
const OurServicesMain = styled.div`
  ${tw`
    rounded-2xl
    px-6
    py-7
    flex
    flex-col

  `}
  border: 1px solid #ededed;
`;
const OurServiceTitle = styled.div`
  ${tw`
    capitalize
    text-xl
    font-medium
    mb-8
    pb-2
  `}
  border-bottom: 1px solid #ededed;
`;
const OurService = styled.div`
  ${tw`
    width[25%]
  `}
`;
const CTABtn = styled.div`
  ${tw`
      uppercase
      font-medium
      mt-2
  `}
`;
const CTAText = styled.div`
  ${tw`
    mt-2
    text-xl
  `}
`;
const CTATitle = styled.div`
  ${tw`
    text-2xl
    text-[#212121]

  `}
`;
const CTADiscount = styled.div`
  ${tw`
    bg-[#212121]
    text-white
    p-2
    text-sm
    font-medium
    rounded-xl
    mb-3
  `}
`;
const CTAContent = styled.div`
  ${tw`
    absolute
    top-1/2
    left-1/2
    p-8
    flex
    flex-col
    justify-center
    items-center
  `}
  transform: translate(-50%,-50%);
  background: hsla(0, 0%, 100%, 0.7);
`;
const CTA = styled.div`
  ${tw`
      width[50%]
      relative
  `}
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;
const TestimonialDescription = styled.div`
  ${tw`
      text-center
  `}
`;
const TestimonialSubTitle = styled.div`
  ${tw`
    my-3
  `}
`;
const TestimonialName = styled.div`
  ${tw`
    uppercase
    text-xl
    font-medium
  `}
`;
const TestimonialTitle = styled.div`
  ${tw`
    capitalize
    text-xl
    font-medium
    mb-8
    pb-2
  `}
  border-bottom: 1px solid #ededed;
`;
const TestimonialCard = styled.div`
  ${tw`
    rounded-2xl
    px-6
    py-6
    flex
    justify-center
    flex-col
    items-center
  `}
  border: 1px solid #ededed;
  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-bottom: 20px;
  }
`;
const Testimonial = styled.div`
  ${tw`
    width[25%]


  `}
`;
const MainContainer = styled.div`
  ${tw`
    flex
    items-stretch
    gap-6
  `}
`;

export const OurServices = () => {
  return (
    <OurServicesContainer>
      <MainContainer>
        <Testimonial>
          <TestimonialTitle>testimonial</TestimonialTitle>
          <TestimonialCard>
            <img src={Avatar} alt='' />
            <TestimonialName>Alan Doe</TestimonialName>
            <TestimonialSubTitle>CEO & Founder Invision</TestimonialSubTitle>
            <TestimonialDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio
              delectus porro, vero atque, laborum similique illo cumque, aliquam
              sint aut!
            </TestimonialDescription>
          </TestimonialCard>
        </Testimonial>
        <CTA>
          <img src={Avatar} alt='' />
          <CTAContent>
            <CTADiscount>25% Discount</CTADiscount>
            <CTATitle>Summer collection</CTATitle>
            <CTAText>Starting @ $10</CTAText>
            <CTABtn>Shop now</CTABtn>
          </CTAContent>
        </CTA>
        <OurService>
          <OurServiceTitle>Our Services</OurServiceTitle>
          <OurServicesMain>
            <OurServicesItem>
              <OurServicesIcon>
                <BiPhone></BiPhone>
              </OurServicesIcon>
              <OurServicesContent>
                <OurServicesSubTitle>Worldwide Delivery</OurServicesSubTitle>
                <OurServicesDescription>
                  For Order Over $100
                </OurServicesDescription>
              </OurServicesContent>
            </OurServicesItem>
            <OurServicesItem>
              <OurServicesIcon>
                <BiSpa></BiSpa>
              </OurServicesIcon>
              <OurServicesContent>
                <OurServicesSubTitle>Next Day delivery</OurServicesSubTitle>
                <OurServicesDescription>
                  Hours: 8AM - 11PM
                </OurServicesDescription>
              </OurServicesContent>
            </OurServicesItem>
            <OurServicesItem>
              <OurServicesIcon>
                <BiBandAid></BiBandAid>
              </OurServicesIcon>
              <OurServicesContent>
                <OurServicesSubTitle>Return Policy</OurServicesSubTitle>
                <OurServicesDescription>
                  Easy & Free Return
                </OurServicesDescription>
              </OurServicesContent>
            </OurServicesItem>
            <OurServicesItem>
              <OurServicesIcon>
                <BiBadge></BiBadge>
              </OurServicesIcon>
              <OurServicesContent>
                <OurServicesSubTitle>30% money back</OurServicesSubTitle>
                <OurServicesDescription>
                  For Order Over $100
                </OurServicesDescription>
              </OurServicesContent>
            </OurServicesItem>
          </OurServicesMain>
        </OurService>
      </MainContainer>
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
