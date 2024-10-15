import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Container, Content } from 'layouts/Styled';
import { selectCurrentToken } from 'redux/stateSlices/auth/Auth.State.Slice';

function PreAuthLayout() {
  const isAuthenticated = useSelector(selectCurrentToken);

  if (isAuthenticated) {
    return <Navigate replace to="/postAuth" />;
  }

  return (
    <Container>
      <Content display="grid">
        <Outlet />
      </Content>
    </Container>
  );
}

export default PreAuthLayout;
