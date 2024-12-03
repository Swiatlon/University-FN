import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTypedMatches } from 'hooks/useTypedMatches.Hook';
import { toggleDrawer, setDrawerState } from 'redux/stateSlices/view/View.State.Slice';
import './AppBar.scss';
import AppBarConfig from './elements/AppBarConfig';

const mobileBreakpoint = '(max-width:910px)';

function AppBar() {
  const dispatch = useDispatch();
  const matches = useTypedMatches();
  const currentMatch = matches.find(match => match.handle);

  const pageTitle = currentMatch?.handle?.navigation?.text;
  const isMobile = useMediaQuery(mobileBreakpoint);

  useEffect(() => {
    const shouldDrawerBeOpen = !isMobile;
    dispatch(setDrawerState(shouldDrawerBeOpen));
  }, [isMobile, dispatch]);

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
