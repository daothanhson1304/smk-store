import React from 'react';
import { RiDashboardLine } from 'react-icons/ri';
import styled from 'styled-components';
import tw from 'twin.macro';
const DashboardContainer = styled.div`
  ${tw`
      flex
      mt-5
      items-center
      bg-[#0e357b]
      px-6
      py-2
      text-white
      justify-between
  `}
`;
const Icon = styled.div`
  ${tw`
    mr-4
  `}
`;
const TextField = styled.div`
  ${tw`

  `}
`;
const DashboardNotification = styled.div`
  ${tw`
    bg-[#6484ff]
    w-8
    h-5
    flex
    items-center
    justify-center
    py-1
    text-sm
    rounded-xl
  `}
`;
const DashboardContent = styled.div`
  ${tw`
    flex
    items-center
  `}
`;
export const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardContent>
        <Icon>
          <RiDashboardLine></RiDashboardLine>
        </Icon>
        <TextField>Dashboard</TextField>
      </DashboardContent>
      <DashboardNotification>6</DashboardNotification>
    </DashboardContainer>
  );
};
