import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useRouteError } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { selectCurrentToken } from 'redux/stateSlices/auth/Auth.State.Slice';

function ErrorPage() {
  const isAuthenticated = useSelector(selectCurrentToken);
  const navigate = useNavigate();
  const error = useRouteError();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('postAuth/dashboard');
    } else {
      navigate('/login');
    }

    enqueueSnackbar(`Something went wrong. Logs were sent to Admin`, { variant: 'error' });
  }, [isAuthenticated, navigate, error]);

  return null;
}

export default ErrorPage;
