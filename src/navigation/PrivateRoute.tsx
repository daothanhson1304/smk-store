import { ROUTES } from 'constants/constants';
import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';

const PrivateRoute = () => {
  const token = useAppSelector((state) => state.authReducer.token);
  return token ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
};
export default PrivateRoute;
