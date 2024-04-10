// ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
// Replace with actual authentication logic
const isAuthenticated = true,
  userRole = 'admin';

interface IProtectedRoutes {
  readonly requiredRole?: string;
}

function ProtectedRoutes({ requiredRole }: IProtectedRoutes) {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!isAuthenticated) {
    return <Navigate replace to="/preAuth/login" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate replace to="/postAuth/not-authorized" />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
