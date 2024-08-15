import { useEffect } from 'react';
import { useSendLogoutMutation } from 'Redux/ApiSlices/Auth/Auth.Api.Slice';

function Logout() {
  const [sendLogout] = useSendLogoutMutation();

  useEffect(() => {
    sendLogout();
  }, []);

  return null;
}

export default Logout;
