import React from 'react';
import { GENDER, ROUTES } from 'constants/constants';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { signUp } from '../redux/AuthSlice';
import { ISignUpFormData, IRole } from '../types/types';
import { hiddenLoading, showLoading } from 'features/App/redux/AppSlice';
const RegisterContainer = styled.div`
  ${tw`
      min-h-screen  pb-6 px-2 md:px-0
  `}
  background-color: #9921e8;
  background-image: linear-gradient(315deg, #9921e8 0%, #5f72be 74%);
`;
const schema = yup
  .object()
  .shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    mobileNumber: yup.string().required(),
    address: yup.string().required(),
    gender: yup.number().required(),
  })
  .required();
export const Register = () => {
  const { register, handleSubmit } = useForm<ISignUpFormData>({
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector((state) => state.authReducer.isAuthUser);

  const navigate = useNavigate();
  const onSubmit = async (data: ISignUpFormData) => {
    await dispatch(showLoading());
    const roles: IRole[] = [{ id: 1, name: 'ROLE_USER' }];
    await dispatch(signUp({ ...data, roles }));
    await dispatch(hiddenLoading());
  };
  React.useEffect(() => {
    if (isLogin) {
      navigate(ROUTES.LOGIN, {
        state: {
          previousPage: ROUTES.REGISTER,
        },
      });
    }
  }, [isLogin, navigate]);
  return (
    <RegisterContainer>
      {' '}
      <main className='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl'>
        <section>
          <h3 className='font-bold text-2xl'>Welcome to Blueberry-Store</h3>
          <p className='text-gray-600 pt-2'>Sign up your account.</p>
        </section>

        <section className='mt-10'>
          <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>
                Username
              </label>
              <input
                type='text'
                id='username'
                {...register('username')}
                className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
              />
            </div>
            <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>
                Email
              </label>
              <input
                type='email'
                id='email'
                {...register('email')}
                className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
              />
            </div>
            <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>
                Mobile Number
              </label>
              <input
                type='text'
                id='mobile'
                {...register('mobileNumber')}
                className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
              />
            </div>
            <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>
                Address
              </label>
              <input
                type='text'
                id='address'
                {...register('address')}
                className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
              />
            </div>
            <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>
                Gender
              </label>
              <select {...register('gender')}>
                <option value={GENDER.FEMALE}>Female</option>
                <option value={GENDER.MALE}>Male</option>
              </select>
            </div>

            <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>
                Password
              </label>
              <input
                type='password'
                id='password'
                {...register('password')}
                className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
              />
            </div>

            <div className='max-w-lg mx-auto text-center mb-6'>
              <p>
                I have an account?{' '}
                <Link
                  to={ROUTES.LOGIN}
                  state={{
                    previousPage: ROUTES.REGISTER,
                  }}
                  className='font-bold hover:underline'
                >
                  Sign in
                </Link>
                .
              </p>
            </div>
            <button
              className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200'
              type='submit'
            >
              Sign Up
            </button>
          </form>
        </section>
      </main>
    </RegisterContainer>
  );
};
