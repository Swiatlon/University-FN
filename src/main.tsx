import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import AdminPanel from 'views/AdminPanel/AdminPanel';
import CssBaseline from '@mui/material/CssBaseline';
import MainTemplate from './templates/MainTemplate/MainTemplate';
import theme from './theme/theme';
import './assets/themeStyle.scss';
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
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <RouterProvider router={router} />
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
);
