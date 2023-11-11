import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from 'app/store';
import CssBaseline from '@mui/material/CssBaseline';
import MainTemplate from './templates/mainTemplate/MainTemplate';
import theme from './theme/theme';
import AdminPanel from 'views/adminPanel/AdminPanel';
import './assets/styles/themeStyle.scss';
import './app.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainTemplate />,
    children: [
      {
        path: 'AdminPanel',
        element: <AdminPanel />,
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
