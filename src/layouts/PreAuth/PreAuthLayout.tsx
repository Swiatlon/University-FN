import { Navigate, Outlet } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import Navigation from '@components/Navigation/Navigation';
import { v4 as uuidv4 } from 'uuid';
import { Container, Content } from 'layouts/Styled';

import { useSelector } from 'react-redux';
import { selectCurrentToken } from '@features/auth/authSlice';

function PreAuthLayout() {
  const menuItems = [{ id: uuidv4(), text: 'Login', icon: <LoginIcon />, linkTo: '/Login' }];

  const isAuthenticated = useSelector(selectCurrentToken);

  if (isAuthenticated) {
    return <Navigate replace to="/postAuth" />;
  }

  return (
    <Container>
      <Navigation menuItems={menuItems} />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}

export default PreAuthLayout;
