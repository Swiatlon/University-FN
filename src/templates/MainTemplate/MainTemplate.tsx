import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NavigationMenu from '@components/MainTemplate/Navigation/Navigation';
import { ContainerProps } from '@components/MainTemplate/types';
import TopInformationBox from '@components/MainTemplate/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import './MainTemplate.scss';

const Container = styled(Box, { shouldForwardProp: prop => prop !== 'open' })<ContainerProps>(({ theme, open, drawerWidth }) => ({
  '&': {
    gridTemplateColumns: drawerWidth,
    transition: theme.transitions.create('grid', {
      easing: theme.transitions.easing.sharp,
      duration: 400,
    }),
    ...(!open && {
      transition: theme.transitions.create('grid ', {
        easing: theme.transitions.easing.sharp,
        duration: 400,
      }),
      gridTemplateColumns: theme.spacing(7.5),
    }),
  },
}));

const MainTemplate = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerWidth = 210;

  return (
    <Container className="container" open={open} drawerWidth={drawerWidth}>
      <NavigationMenu />
      <TopInformationBox handleOpen={toggleDrawer} />
      <Box component="main" sx={{ backgroundColor: theme => theme.palette.grey[100], minHeight: 'calc(100vh - 64px)' }}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default MainTemplate;
