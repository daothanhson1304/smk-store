import { Table } from 'components/Table/Table';
import { hiddenLoading, showLoading } from 'features/App/redux/AppSlice';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'redux/store';
import styled from 'styled-components';
import tw from 'twin.macro';
import { renderGender } from 'utils/utils';
import { Header } from '../components/Header';
import { deleteCustomer, getAllCustomer } from '../redux/AdminThunk';
import { ICustomer } from '../types/types';
const CustomersContainer = styled.div`
  ${tw`

  `}
`;

export const CustomersPage = () => {
  const { customers } = useAppSelector((state) => state.adminReducer);
  const dispatch = useAppDispatch();
  const handleDeleteCustomer = async (id: number) => {
    dispatch(showLoading());
    await dispatch(deleteCustomer(id));
    dispatch(hiddenLoading());
  };
  React.useEffect(() => {
    const getData = async () => {
      dispatch(showLoading());
      await dispatch(getAllCustomer());
      setTimeout(() => {
        dispatch(hiddenLoading());
      }, 500);
    };
    getData();
  }, []);
  return (
    <CustomersContainer>
      <Header title={'Customers Management'} buttonText={'Add Customer'} />
      <Table
        data={customers.map((customer: ICustomer) => {
          return { ...customer, gender: renderGender(customer.gender) };
        })}
        handleDelete={handleDeleteCustomer}
      ></Table>
    </CustomersContainer>
  );
};
