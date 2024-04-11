import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRefreshMutation } from '@features/auth/authApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials, logOut, selectCurrentToken } from '@features/auth/authSlice';

interface RefreshResponse {
  accessToken: string;
}

function PersistLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [refresh, { isLoading, isError }] = useRefreshMutation();
  const token = useSelector(selectCurrentToken);

  useEffect(() => {
    if (!token) {
      const verifyRefreshToken = async () => {
        try {
          const result: RefreshResponse = (await refresh().unwrap()) as RefreshResponse;
          const { accessToken } = result;
          dispatch(setCredentials({ accessToken }));
        } catch (error) {
          dispatch(logOut());
          navigate('/login');
        }
      };

      verifyRefreshToken().catch(err => err as string);
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to refresh session</div>;
  }

  return <Outlet />;
}

export default PersistLogin;
