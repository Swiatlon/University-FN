import React from 'react';
import { SnackbarProvider } from 'notistack';

interface SnackbarConfigProps {
  children: React.ReactNode;
}

const SnackbarConfig: React.FC<SnackbarConfigProps> = ({ children }) => {
  return (
    <SnackbarProvider
      autoHideDuration={3000}
      maxSnack={2}
      preventDuplicate
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default SnackbarConfig;
