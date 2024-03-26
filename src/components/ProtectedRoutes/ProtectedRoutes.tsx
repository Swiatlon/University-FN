// ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = true; // Replace with actual authentication logic
const userRole = 'admin'; // Replace with actual role checking logic

interface IProtectedRoutes {
  requiredRole?: string;
}

function ProtectedRoutes({ requiredRole }: IProtectedRoutes) {
  if (!isAuthenticated) {
    return <Navigate to="/preAuth/login" replace />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/postAuth/not-authorized" replace />;
  }

  return <Outlet />; // Allows nested routes to be rendered
}

export default ProtectedRoutes;
