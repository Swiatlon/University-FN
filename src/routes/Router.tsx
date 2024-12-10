import { createBrowserRouter, Outlet } from 'react-router-dom';
import PostAuthLayout from 'layouts/postAuth/PostAuthLayout';
import PreAuthLayout from 'layouts/preAuth/PreAuthLayout';
import PersistLoginMiddleware from 'middlewares/persistLogin/PersistLogin.Middleware';
import ProtectedRoutesMiddleware from 'middlewares/protectedRoutes/ProtectedRoutes.Middleware';
import ErrorPage from '../components/shared/errorPage/ErrorPage';
import { academicsConfig } from './routesConfigs/AcademicsConfig';
import { communityConfig } from './routesConfigs/CommunityConfig';
import { dashboardConfig } from './routesConfigs/DashboardConfig';
import { indexPostAuthConfig } from './routesConfigs/IndexPostAuthConfig';
import { indexPreAuthConfig } from './routesConfigs/IndexPreAuthConfig';
import { loginConfig } from './routesConfigs/LoginConfig';
import { logoutConfig } from './routesConfigs/LogoutConfig';
import { profileConfig } from './routesConfigs/ProfileConfig';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PersistLoginMiddleware />,
        children: [
          {
            path: '',
            element: <PreAuthLayout />,
            children: [indexPreAuthConfig, loginConfig],
          },
          {
            path: 'postAuth',
            element: <ProtectedRoutesMiddleware />,
            children: [
              {
                element: <PostAuthLayout />,
                children: [
                  indexPostAuthConfig,
                  dashboardConfig,
                  profileConfig,
                  communityConfig,
                  academicsConfig,
                  logoutConfig,
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
