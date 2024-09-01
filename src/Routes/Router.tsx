import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import PostAuthLayout from 'Layouts/PostAuth/PostAuthLayout';
import PreAuthLayout from 'Layouts/PreAuth/PreAuthLayout';
import PersistLoginMiddleware from 'Middlewares/PersistLogin/PersistLogin.Middleware';
import ProtectedRoutesMiddleware from 'Middlewares/ProtectedRoutes/ProtectedRoutes.Middleware';
import SessionMiddleware from 'Middlewares/Session/Session.Middleware';
import { academicsConfig } from './RoutesConfigs/AcademicsConfig';
import { communityConfig } from './RoutesConfigs/CommunityConfig';
import { dashboardConfig } from './RoutesConfigs/DashboardConfig';
import { indexPostAuthConfig } from './RoutesConfigs/IndexPostAuthConfig';
import { indexPreAuthConfig } from './RoutesConfigs/IndexPreAuthConfig';
import { loginConfig } from './RoutesConfigs/LoginConfig';
import { logoutConfig } from './RoutesConfigs/LogoutConfig';
import { profileConfig } from './RoutesConfigs/ProfileConfig';
import ErrorPage from './Shared/Error/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <SessionMiddleware />,
        children: [
          {
            path: '',
            element: <PreAuthLayout />,
            children: [indexPreAuthConfig, loginConfig],
          },
          {
            path: 'postAuth',
            element: <PersistLoginMiddleware />,
            children: [
              {
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
    ],
  },
]);
