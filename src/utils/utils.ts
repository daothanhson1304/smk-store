import { GENDER } from 'constants/constants';

export const data = {};
export const renderGender = (gender: number) => {
  return gender === GENDER.MALE ? 'Male' : 'Female';
};
export const renderProductStatus = (status: number) => {
  const statusData: any = {
    '0': 'DEACTIVE',
    '1': 'PROMOTION',
    '2': 'SALE',
    '3': 'NEW',
  };
  return statusData[`${status}`];
};
