import MenuIcon from '@mui/icons-material/Menu';
import { Box, Typography } from '@mui/material';
import { useTypedDispatch } from 'hooks/useStore.Hooks';
import { toggleDrawer } from 'redux/stateSlices/view/View.State.Slice';
import AppBarConfig from './elements/AppBarConfig';
import './styles/AppBar.scss';
import { useTypedMatches } from 'hooks/useTypedMatches.Hook';

function AppBar() {
  var a =5;




  const dispatch = useTypedDispatch();
  const matches = useTypedMatches();

        const currentMatch = matches.find(match => match.handle);
  const pageTitle = currentMatch?.handle?.navigation?.text;

  const handleToggleDrawer = () => {
    dispatch(toggleDrawer());
  };

  return (
    <Box className="AppBarBox">
      <MenuIcon fontSize="medium" onClick={handleToggleDrawer} className="AppBarHamburger" />
      <Typography variant="h5">{pageTitle}</Typography>
      <AppBarConfig />
    </Box>
  );
}

export default AppBar;
