import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import PostAuthLayout from 'Layouts/PostAuth/PostAuthLayout';
import PreAuthLayout from 'Layouts/PreAuth/PreAuthLayout';
import PersistLoginMiddleware from 'Middlewares/PersistLogin/PersistLogin.Middleware';
import ProtectedRoutesMiddleware from 'Middlewares/ProtectedRoutes/ProtectedRoutes.Middleware';
import { communityConfig } from './RoutesConfig/CommunityConfig';
import { dashboardConfig } from './RoutesConfig/DashboardConfig';
import { indexPostAuthConfig } from './RoutesConfig/IndexPostAuthConfig';
import { loginConfig } from './RoutesConfig/LoginConfig';
import { logoutConfig } from './RoutesConfig/LogoutConfig';
import { profileConfig } from './RoutesConfig/ProfileConfig';
import ErrorPage from './Shared/Error/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <PreAuthLayout />,
        children: [loginConfig],
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
                children: [indexPostAuthConfig, dashboardConfig, profileConfig, communityConfig, logoutConfig],
              },
            ],
          },
        ],
      },
    ],
  },
]);
