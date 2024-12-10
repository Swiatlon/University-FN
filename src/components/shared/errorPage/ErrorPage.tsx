import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useRouteError } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { selectCurrentToken } from 'redux/stateSlices/auth/Auth.State.Slice';

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  const isAuthenticated = useSelector(selectCurrentToken);

  useEffect(() => {
    navigate(isAuthenticated ? 'postAuth/dashboard' : '/login');
    enqueueSnackbar(`Something went wrong. Logs were sent to Admin`, { variant: 'error' });
  }, [isAuthenticated, error]);

  return null;
};

export default ErrorPage;
