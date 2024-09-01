import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Container, Content } from 'Layouts/Styled';
import { selectCurrentToken } from 'Redux/StateSlices/Auth/Auth.State.Slice';

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
