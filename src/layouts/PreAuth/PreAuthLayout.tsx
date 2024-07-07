import { Navigate, Outlet } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import Navigation from 'Components/Navigation/Navigation';
import { v4 as uuidv4 } from 'uuid';
import { Container, Content } from 'Layouts/Styled';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from 'Redux/Slices/auth/authSlice';
import { useTranslation } from 'react-i18next';

function PreAuthLayout() {
  const { t } = useTranslation();
  const menuItems = [{ id: uuidv4(), text: t('login_title'), icon: <LoginIcon />, linkTo: '/Login' }];

  const isAuthenticated = useSelector(selectCurrentToken);

  if (isAuthenticated) {
    return <Navigate replace to="/postAuth" />;
  }

  return (
    <Container>
      <Navigation menuItems={menuItems} />
      <Content display="grid">
        <Outlet />
      </Content>
    </Container>
  );
}

export default PreAuthLayout;
