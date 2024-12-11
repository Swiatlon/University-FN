import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { closeSnackbar, SnackbarKey } from 'notistack';

interface ISnackbarCloseIconProps {
  snackbarKey: SnackbarKey;
}

const SnackbarCloseIcon = ({ snackbarKey }: ISnackbarCloseIconProps) => {
  return (
    <IconButton onClick={() => closeSnackbar(snackbarKey)} color="inherit">
      <CloseIcon />
    </IconButton>
  );
};

export default SnackbarCloseIcon;
