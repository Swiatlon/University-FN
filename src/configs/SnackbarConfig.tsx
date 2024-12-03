import React from 'react';
import { SnackbarProvider } from 'notistack';

interface SnackbarConfigProps {
  children: React.ReactNode;
}

const SnackbarConfig: React.FC<SnackbarConfigProps> = ({ children }) => {
  return (
    <SnackbarProvider
      autoHideDuration={1000}
      maxSnack={2}
      preventDuplicate
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      style={{
        minWidth: '300px',
        pointerEvents: 'none',
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default SnackbarConfig;
