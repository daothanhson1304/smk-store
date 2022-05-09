import { GENDER } from 'constants/constants';

export const data = {};
export const renderGender = (gender: number) => {
  return gender === GENDER.MALE ? 'Male' : 'Female';
};
