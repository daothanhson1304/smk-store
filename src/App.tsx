import './App.css';
import tw from 'twin.macro';
import { Home } from './features/Home/Home';

import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { Login } from './features/Auth/containers/Login';
import { Register } from './features/Auth/containers/Register';
import { Products } from './features/Home/pages/Products';
import { TopSection } from './features/Home/components/TopSection';
import { ROUTES } from './constants/constants';
import { About } from './features/Home/components/About';
import { Blogs } from './features/Home/components/Blogs';
import { ProductDetail } from './features/Home/containers/ProductDetail';

const AppContainer = tw.div`
flex
flex-col
w-full
h-full
overflow-hidden
`;

function App() {
  return (
    <AppContainer>
      {/* <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Routes> */}
      <TopSection />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}></Route>
        <Route
          path={`${ROUTES.PRODUCTS}/${ROUTES.PRODUCT_DETAIL}/:productId`}
          element={<ProductDetail />}
        />
        <Route path={ROUTES.PRODUCTS} element={<Products />}></Route>
        <Route path={ROUTES.ABOUT} element={<About></About>}></Route>
        <Route path={ROUTES.BLOGS} element={<Blogs></Blogs>}></Route>
      </Routes>
    </AppContainer>
  );
}

export default App;
