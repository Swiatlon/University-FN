import { useEffect } from 'react';
import { useSendLogoutMutation } from 'redux/apiSlices/auth/Auth.Api.Slice';

function Logout() {
  const [sendLogout] = useSendLogoutMutation();

  useEffect(() => {
    sendLogout();
  }, []);

  return null;
}

export default Logout;
