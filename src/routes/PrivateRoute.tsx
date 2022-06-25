import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';
import { LOGIN_PATH } from '@/utils/paths';

const PrivateRoute = () => {
  const { isLoggedIn } = useAuthContext();
  return isLoggedIn ? <Outlet /> : <Navigate to={LOGIN_PATH} replace />;
};

export default PrivateRoute;
