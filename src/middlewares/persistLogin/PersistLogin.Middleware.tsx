import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import FullScreenLoader from 'components/shared/fullScreenLoader/FullScreenLoader';
import { useRefreshMutation } from 'redux/apiSlices/auth/Auth.Api.Slice';
import { selectCurrentToken, setCredentials, logOut } from 'redux/stateSlices/auth/Auth.State.Slice';
import { useEffectOnlyOnUpdate } from 'utils/useEffect/UseEffect';
import type { IRefreshResponse } from 'contract/slices/auth/Auth';

function PersistLoginMiddleware() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isTokenReady, setIsTokenReady] = useState(false);
  const [refresh, { isLoading, isError }] = useRefreshMutation();
  const token = useSelector(selectCurrentToken);
  const sessionID = sessionStorage.getItem('sessionUUID')!;

  useEffectOnlyOnUpdate(() => {
    if (!token) {
      const verifyRefreshToken = async () => {
        try {
          const result: IRefreshResponse = await refresh({ sessionID }).unwrap();
          const { accessToken } = result;
          dispatch(setCredentials({ accessToken }));
        } catch (error) {
          dispatch(logOut());
          navigate('/login');
        }
      };

      verifyRefreshToken();
    }

    setIsTokenReady(true);
  }, [token]);

  if (isLoading || !isTokenReady) {
    return <FullScreenLoader />;
  }

  if (isError) {
    throw Error('Failed to refresh session');
  }

  return <Outlet />;
}

export default PersistLoginMiddleware;
