import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useTypedMatches } from 'Hooks/useTypedMatches.Hook';
import { selectCurrentToken, selectUserRoles } from 'Redux/StateSlices/Auth/Auth.State.Slice';

const ProtectedRoutesMiddleware: React.FC = () => {
  const matches = useTypedMatches();
  const currentMatch = matches.find(match => match.handle);

  const userRoles = useSelector(selectUserRoles);
  const isAuthenticated = useSelector(selectCurrentToken);
  const notAllowedRoles = currentMatch?.handle?.permissions?.notAvailableForRoles;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (userRoles.some(role => notAllowedRoles?.includes(role))) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutesMiddleware;
