import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import './assets/styles/themeStyle.scss';
import './assets/styles/app.scss';
import Login from 'views/Login/Login';
import App from 'App';
import ProtectedRoutes from '@components/ProtectedRoutes/ProtectedRoutes';
import PreAuthLayout from 'layouts/PreAuth/PreAuthLayout';
import PostAuthLayout from 'layouts/PostAuth/PostAuthLayout';
import PersistLogin from '@components/PersistLogin/PersistLogin';
import PersonalData from 'views/PersonalData/PersonalData';
import Dashboard from 'views/Dashboard/Dashboard';

const router = createBrowserRouter([
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
                        element: <PersonalData />,
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <RouterProvider router={router} />
        </StyledEngineProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
