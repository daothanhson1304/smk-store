import { Table } from 'components/Table/Table';
import { hiddenLoading, showLoading } from 'features/App/redux/AppSlice';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'redux/store';
import styled from 'styled-components';
import tw from 'twin.macro';
import { renderOrderStatus } from 'utils/utils';

import { Header } from '../components/Header';
import { getAllInvoices } from '../redux/AdminThunk';
const CustomersContainer = styled.div`
  ${tw`

  `}
`;

export const InvoicesPage = () => {
  const { invoices } = useAppSelector((state) => state.adminReducer);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    const getData = async () => {
      dispatch(showLoading());
      await dispatch(getAllInvoices());
      dispatch(hiddenLoading());
    };
    getData();
  }, []);
  return (
    <CustomersContainer>
      <Header title={'Invoices Management'} />
      <Table
        data={invoices.map((item) => {
          return { ...item, status: renderOrderStatus(item.status) };
        })}
      ></Table>
    </CustomersContainer>
  );
};
