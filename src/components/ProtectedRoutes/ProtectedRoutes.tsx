import { selectCurrentToken } from '@features/auth/authSlice';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
/* eslint-disable */

function ProtectedRoutes() {
  const isAuthenticated = useSelector(selectCurrentToken);

  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
