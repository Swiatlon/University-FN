import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { Container, Content } from 'Layouts/Styled';
import { selectCurrentToken } from 'Redux/StateSlices/Auth/Auth.State.Slice';
import { v4 as uuidv4 } from 'uuid';
import Navigation from 'Components/Shared/Navigation/Navigation';

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
