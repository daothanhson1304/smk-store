import { ROUTES } from 'constants/constants';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { signIn } from '../redux/AuthSlice';
import { ISignInFormData } from '../types/types';
import { useNavigate, useLocation } from 'react-router';
import { hiddenLoading, showLoading } from 'features/App/redux/AppSlice';

const schema = yup
  .object()
  .shape({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
const LoginContainer = styled.div`
  ${tw`
      min-h-screen
      pb-6
      px-2
      md:px-0
  `}
  background-color: #9921e8;
  background-image: linear-gradient(315deg, #9921e8 0%, #5f72be 74%);
`;
interface ILocationState {
  previousPage: string | null;
}
export const Login = () => {
  const isLogin = useAppSelector(state => state.authReducer.isAuthUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { register, handleSubmit } = useForm<ISignInFormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (formData: ISignInFormData) => {
    await dispatch(showLoading());
    await dispatch(signIn(formData));
    await dispatch(hiddenLoading());
  };
  React.useEffect(() => {
    const data = state as ILocationState;
    if (isLogin) {
      if (state && data && data.previousPage === ROUTES.REGISTER) {
        navigate(ROUTES.HOME);
      }
      navigate(-1);
    }
  }, [isLogin, navigate]);
  return (
    <LoginContainer>
      <main className='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl'>
        <section>
          <h3 className='font-bold text-2xl'>Welcome to Blueberry-Store</h3>
          <p className='text-gray-600 pt-2'>Sign in to your account.</p>
        </section>

        <section className='mt-10'>
          <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>
                Username
              </label>
              <input
                type='text'
                id='email'
                {...register('username')}
                className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
              />
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
            <div className='flex justify-end'>
              <a
                href='#'
                className='text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6'
              >
                Forgot your password?
              </a>
            </div>
            <div className='max-w-lg mx-auto text-center mb-6'>
              <p>
                Don't have an account?{' '}
                <Link
                  to={ROUTES.REGISTER}
                  className='font-bold hover:underline'
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
            <button
              className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200'
              type='submit'
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
    </LoginContainer>
  );
};
