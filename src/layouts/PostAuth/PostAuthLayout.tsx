import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import Navigation from '@components/Navigation/Navigation';
import { v4 as uuidv4 } from 'uuid';
import { Container, Content } from 'layouts/Styled';

function PreAuthLayout() {
  const menuItems = [{ id: uuidv4(), text: 'Login', icon: <LoginIcon />, linkTo: '/Login' }];

  return (
    <Container>
      <Navigation menuItems={menuItems} />
      <Content>
        <Box sx={{ width: '100%', height: 'fit-content', background: 'purple', position: 'sticky', top: 0 }}>APPBAR</Box>
        <Outlet />
      </Content>
    </Container>
  );
}

export default PreAuthLayout;
