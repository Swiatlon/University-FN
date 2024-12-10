import { ReactNode } from 'react';
import { SnackbarProvider } from 'notistack';
import SnackbarCloseIcon from './SnackbarCloseIcon';

interface ISnackbarConfigProps {
  children: ReactNode;
}

const SnackbarConfig = ({ children }: ISnackbarConfigProps) => {
  return (
    <SnackbarProvider
      preventDuplicate
      autoHideDuration={1000}
      maxSnack={2}
      action={snackbarKey => <SnackbarCloseIcon snackbarKey={snackbarKey} />}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default SnackbarConfig;
