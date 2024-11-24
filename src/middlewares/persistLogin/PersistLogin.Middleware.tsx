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
  const [isTokenReady, setIsTokenReady] = useState(false);
  const [refresh, { isLoading, isError }] = useRefreshMutation();
  const token = useSelector(selectCurrentToken);
  const sessionID = sessionStorage.getItem('sessionUUID')!;

  const refreshToken = async () => {
    if (!token && !isLoading) {
      try {
        const result = await refresh({ sessionID }).unwrap();
        const { accessToken } = result;
        dispatch(setCredentials({ accessToken }));
      } catch (error) {
        dispatch(logOut());
        navigate('/login');
      }
    }
    setIsTokenReady(true);
  };

  useEffectOnce(() => {
    refreshToken();
  });

  if (isLoading || !isTokenReady) {
    return <FullScreenLoader />;
  }

  if (isError) {
    throw new Error('Failed to refresh session');
  }

  return <Outlet />;
}

export default PersistLoginMiddleware;
