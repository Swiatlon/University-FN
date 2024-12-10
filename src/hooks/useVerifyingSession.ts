import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedDispatch } from 'hooks/useStore.Hooks';
import { useRefreshMutation } from 'redux/apiSlices/auth/Auth.Api.Slice';
import { logOut, setCredentials } from 'redux/stateSlices/auth/Auth.State.Slice';
import { useEffectOnce } from 'utils/useEffect/UseEffect';

export const useVerifySession = (token: string | null) => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const [isVerifying, setIsVerifying] = useState(true);
  const [refresh, { isLoading }] = useRefreshMutation();

  useEffectOnce(() => {
    if (!token) {
      setIsVerifying(false);
      return;
    }

    refresh()
      .unwrap()
      .then(result => {
        dispatch(setCredentials({ accessToken: result.accessToken }));
      })
      .catch(() => {
        dispatch(logOut());
        navigate('/login');
      })
      .finally(() => {
        setIsVerifying(false);
      });
  });
  return { isLoading: isLoading || isVerifying };
};
