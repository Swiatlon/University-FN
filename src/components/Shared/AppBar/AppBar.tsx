import { useDispatch } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Typography } from '@mui/material';
import { useTypedMatches } from 'Hooks/useTypedMatches.Hook';
import { toggleDrawer } from 'Redux/StateSlices/View/View.State.Slice';
import AppBarConfig from './Elements/AppBarConfig';
import './AppBar.scss';

function AppBar() {
  const dispatch = useDispatch();
  const matches = useTypedMatches();
  const currentMatch = matches.find(match => match.handle);

  const pageTitle = currentMatch?.handle?.navigation?.text;

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
