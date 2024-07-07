import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { useRefreshMutation } from 'Redux/Slices/auth/authApiSlice';
import { selectCurrentToken, setCredentials, logOut } from 'Redux/Slices/auth/authSlice';

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

      verifyRefreshToken().catch((err: unknown) => err as string);
    }
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <div>Failed to refresh session</div>;
  }

  return <Outlet />;
}

export default PersistLogin;
