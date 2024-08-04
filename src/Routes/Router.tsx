import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '@mui/icons-material/Dashboard';
import Login from './PreAuth/Login/Login';
import App from 'App';
import PersistLogin from 'Components/PersistLogin/PersistLogin';
import ProtectedRoutes from 'Components/ProtectedRoutes/ProtectedRoutes';
import PostAuthLayout from 'Layouts/PostAuth/PostAuthLayout';
import PreAuthLayout from 'Layouts/PreAuth/PreAuthLayout';
import { useSelector } from 'react-redux';
import { getRoleBasedComponent } from './Utils/RouterUtils';
import { selectUserRoles } from 'Redux/Slices/userInfo/userInfoSlice';
import Teachers from './PostAuth/Teachers/Teachers';

const RoleBasedPersonalData: React.FC = () => {
  const roles = useSelector(selectUserRoles);

  return getRoleBasedComponent(roles);
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <PreAuthLayout />,
        children: [{ path: 'login', element: <Login /> }],
      },
      {
        path: 'postAuth',
        element: <PersistLogin />,
        children: [
          {
            element: <ProtectedRoutes />,
            children: [
              {
                element: <PostAuthLayout />,
                children: [
                  {
                    index: true,
                    element: <div>Zaauutoryzowany tokenem</div>,
                  },
                  {
                    path: 'dashboard',
                    element: <Dashboard />,
                  },
                  {
                    path: 'profile',
                    children: [
                      {
                        path: 'personal-data',
                        element: <RoleBasedPersonalData />,
                      },
                    ],
                  },
                  {
                    path: 'community',
                    children: [
                      {
                        path: 'teachers',
                        element: <Teachers />,
                      },
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
