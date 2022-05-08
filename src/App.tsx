import React from 'react';
import './App.css';
import tw from 'twin.macro';
import { Home } from './features/Home/pages/Home';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { Login } from './features/Auth/pages/Login';
import { Register } from './features/Auth/pages/Register';
import { Products } from './features/Home/pages/Products';
import { TopSection } from './features/Home/containers/TopSection';
import { ROUTES } from './constants/constants';
import { About } from './features/Home/components/About';
import { Blogs } from './features/Home/components/Blogs';
import { ProductDetail } from './features/Home/pages/ProductDetail';
import { Checkout } from 'features/Home/pages/Checkout';
import { CheckoutSuccess } from 'features/Home/pages/CheckoutSuccess';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/react';
import styled from 'styled-components';
import { useAppSelector } from 'redux/store';
import { AdminPage } from 'features/Admin/pages/AdminPage';
import { CustomersPage } from 'features/Admin/pages/CustomersPage';
import { ProductsAdminPage } from 'features/Admin/pages/ProductsAdminPage';
import { AddOrEditProductPage } from 'features/Admin/pages/AddOrEditProductPage';
const AppContainer = styled.div`
  ${tw`
      flex
      flex-col
      w-full
      h-full
      overflow-hidden
  `}
`;
const LoadingContainer = styled.div`
  ${tw`
      fixed
      z-50
      top-0
      right-0
      left-0
      bottom-0
      w-[100vw]
      h-[100%]
      flex
      items-center
      justify-center
      bg-[rgba(216, 210, 210, 0.6)]
  `}
`;
const override = css`
  display: block;
`;
function App() {
  const isLoading = useAppSelector(state => state.appReducer.isLoading);
  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <ScaleLoader color={'#fe919d'} loading={true} css={override} />
        </LoadingContainer>
      )}

      <AppContainer>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
        </Routes>

        <Routes>
          <Route path='/' element={<TopSection />}>
            <Route path={ROUTES.HOME} element={<Home />}></Route>
            <Route
              path={`${ROUTES.PRODUCTS}/${ROUTES.PRODUCT_DETAIL}/:productId`}
              element={<ProductDetail />}
            />
            <Route path={ROUTES.PRODUCTS} element={<Products />}></Route>
            <Route path={ROUTES.ABOUT} element={<About></About>}></Route>
            <Route path={ROUTES.BLOGS} element={<Blogs></Blogs>}></Route>
            <Route
              path={ROUTES.CHECKOUT}
              element={<Checkout></Checkout>}
            ></Route>
            <Route
              path={ROUTES.CHECKOUT_SUCCESS}
              element={<CheckoutSuccess></CheckoutSuccess>}
            ></Route>
          </Route>
        </Routes>
        <Routes>
          <Route path={ROUTES.ADMIN} element={<AdminPage />}>
            <Route path={ROUTES.CUSTOMERS} element={<CustomersPage />} />
            <Route
              path={ROUTES.PRODUCTS_ADMIN}
              element={<ProductsAdminPage />}
            />
            <Route
              path={ROUTES.ADD_OR_EDIT_PRODUCT}
              element={<AddOrEditProductPage />}
            />
          </Route>
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
