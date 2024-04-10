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
        element: <ProtectedRoutes />,
        children: [
          {
            element: <PersistLogin />,
            children: [
              {
                element: <PostAuthLayout />,
                children: [{ index: true, element: <div>Zaauutoryzowany tokenem</div> }],
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
