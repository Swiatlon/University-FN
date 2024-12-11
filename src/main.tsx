/// <reference types="vite-plugin-svgr/client" />
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import SnackbarConfig from 'configs/snackbar/SnackbarConfig';
import { DialogProvider } from 'contexts/dialogs/Dialogs.Provider';
import ReactDOM from 'react-dom/client';
import { store } from 'redux/config/Store';
import { router } from 'routes/Router';
import theme from 'theme/theme';
import './assets/styles/app.scss';
import './i18n/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <SnackbarConfig>
            <DialogProvider>
              <RouterProvider router={router} />
            </DialogProvider>
          </SnackbarConfig>
        </StyledEngineProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
