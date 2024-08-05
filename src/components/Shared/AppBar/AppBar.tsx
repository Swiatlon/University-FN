import { Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { toggleDrawer } from 'Redux/Slices/view/viewSlice';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { startCase, toLower } from 'lodash';
import './AppBar.scss';
import AppBarConfig from './Elements/AppBarConfig';

function AppBar() {
  const dispatch = useDispatch();
  const location = useLocation();

  const pathArray = location.pathname.split('/');
  const pageTitle = startCase(toLower(pathArray[pathArray.length - 1]));

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
        <Typography variant="h5">{pageTitle}</Typography>
        <AppBarConfig />
      </Box>
    </Box>
  );
}

export default AppBar;
