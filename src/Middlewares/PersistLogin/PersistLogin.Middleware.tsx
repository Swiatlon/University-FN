import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useRefreshMutation } from 'Redux/ApiSlices/Auth/Auth.Api.Slice';
import { selectCurrentToken, setCredentials, logOut } from 'Redux/StateSlices/Auth/Auth.State.Slice';

interface IRefreshResponse {
  accessToken: string;
}

function PersistLoginMiddleware() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [refresh, { isLoading, isError }] = useRefreshMutation();
  const token = useSelector(selectCurrentToken);

  useEffect(() => {
    if (!token) {
      const verifyRefreshToken = async () => {
        try {
          const result: IRefreshResponse = (await refresh().unwrap()) as IRefreshResponse;
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
    throw Error('Failed to refresh session');
  }

  return <Outlet />;
}

export default PersistLoginMiddleware;
