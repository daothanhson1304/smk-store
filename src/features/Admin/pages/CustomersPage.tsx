import { Table } from 'components/Table/Table';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Header } from '../components/Header';
const CustomersContainer = styled.div`
  ${tw`

  `}
`;

export const CustomersPage = () => {
  return (
    <CustomersContainer>
      <Header title={'Customers Management'} buttonText={'Add Customer'} />
      <Table
        data={[
          {
            username: 'daothanhson',
            status: 1,
            email: 'son@gmail.com',
            gender: 1,
          },
          {
            username: 'daothanhson',
            status: 1,
            email: 'son@gmail.com',
            gender: 1,
          },
          {
            username: 'daothanhson',
            status: 1,
            email: 'son@gmail.com',
            gender: 1,
          },
          {
            username: 'daothanhson',
            status: 1,
            email: 'son@gmail.com',
            gender: 1,
          },
          {
            username: 'daothanhson',
            status: 1,
            email: 'son@gmail.com',
            gender: 1,
          },
        ]}
      ></Table>
    </CustomersContainer>
  );
};
