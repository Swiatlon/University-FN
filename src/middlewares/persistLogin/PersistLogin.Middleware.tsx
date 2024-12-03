import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import FullScreenLoader from 'components/shared/fullScreenLoader/FullScreenLoader';
import { useEffectOnce } from 'hooks/useExtendedUseEffect';
import { useRefreshMutation } from 'redux/apiSlices/auth/Auth.Api.Slice';
import { selectCurrentToken, logOut, setCredentials } from 'redux/stateSlices/auth/Auth.State.Slice';

function PersistLoginMiddleware() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [refresh, { isLoading }] = useRefreshMutation();
  const token = useSelector(selectCurrentToken) ?? localStorage.getItem('accessToken');
  const [checkingSession, setCheckingSession] = useState(true);

  useEffectOnce(() => {
    const verifyToken = async () => {
      try {
        const result = await refresh().unwrap();
        dispatch(setCredentials({ accessToken: result.accessToken }));
      } catch (err) {
        dispatch(logOut());
        navigate('/login');
      } finally {
        setCheckingSession(false);
      }
    };

    if (!token) {
      setCheckingSession(false);
    }

    verifyToken();
  });

  if (isLoading || checkingSession) {
    return <FullScreenLoader />;
  }

  return <Outlet />;
}

export default PersistLoginMiddleware;
