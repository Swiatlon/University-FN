import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const AppBar = styled(Box)(() => ({
  '&': {
    height: '90px',
    display: 'flex',
    background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%,   #080e2575 100%)',
    padding: '0px 30px',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    textAlign: 'center',
    left: 0,
    top: 0,
  },
}));

const Container = styled(Box)(() => ({
  '&': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
}));

const MiddleContent = styled(Box)(() => ({
  '&': {
    height: '100%',
  },
}));

function MiddleContainer({ children }: ReactNode) {
  return (
    <Container>
      <AppBar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant="h5">Admin Panel</Typography>
        <Typography variant="body1">30:00</Typography>
      </AppBar>
      <MiddleContent>{children}</MiddleContent>
    </Container>
  );
}

export default MiddleContainer;
