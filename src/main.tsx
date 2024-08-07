/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';
import { store } from 'Redux/Store';
import { router } from 'Routes/Router';
import theme from './theme/theme';
import './assets/styles/themeStyle.scss';
import './assets/styles/app.scss';
import './i18n/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <SnackbarProvider
            autoHideDuration={3000}
            maxSnack={2}
            preventDuplicate
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <RouterProvider router={router} />
          </SnackbarProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
