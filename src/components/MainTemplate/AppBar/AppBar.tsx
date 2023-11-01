import { FC } from 'react';
import { styled } from '@mui/material/styles';
import AppBarMUI from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import { AppBar as AppBarProps } from '../types';

const StyledAppBar = styled(AppBarMUI)(() => ({
  '&': {
    position: 'sticky',
    height: 'max-content',
    left: 0,
    top: 0,
    gridArea: 'header',
  },
}));

const AppBar: FC<AppBarProps> = ({ handleOpen }) => (
  <StyledAppBar color="primary" position="fixed" elevation={0}>
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="open/close drawer" onClick={handleOpen}>
        <MenuIcon />
      </IconButton>
      <Box className="fullWidth" display="flex" justifyContent="right" alignContent="center" gap="10px">
        <Typography whiteSpace="nowrap">UserName</Typography>
        <Divider orientation="vertical" color="white" flexItem />
        <Typography>20:00</Typography>
      </Box>
    </Toolbar>
  </StyledAppBar>
);

export default AppBar;
