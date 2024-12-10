import { Navigate, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { useTypedSelector } from 'hooks/useStore.Hooks';
import { selectCurrentToken } from 'redux/stateSlices/auth/Auth.State.Slice';

function PreAuthLayout() {
  const isAuthenticated = useTypedSelector(selectCurrentToken);

  if (isAuthenticated) {
    return <Navigate replace to="/postAuth" />;
  }

  return (
    <Box sx={{ display: 'grid' }}>
      <Outlet />
    </Box>
  );
}

export default PreAuthLayout;
