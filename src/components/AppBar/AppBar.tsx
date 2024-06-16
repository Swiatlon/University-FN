import { Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { toggleDrawer } from '@features/view/viewSlice';
import { useDispatch } from 'react-redux';
import './AppBar.scss';
import ConfigAppBar from './ConfigAppBar';

function AppBar() {
  const dispatch = useDispatch();

  const handleToggleDrawer = () => {
    dispatch(toggleDrawer());
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '80px',
        position: 'sticky',
        background: 'white',
        top: 0,
        zIndex: 2,
      }}
    >
      <Box className="AppBarBox">
        <MenuIcon fontSize="medium" onClick={handleToggleDrawer} className="AppBarHamburger" />
        <Typography variant="h5">Personal Data</Typography>
        <ConfigAppBar />
      </Box>
    </Box>
  );
}

export default AppBar;
