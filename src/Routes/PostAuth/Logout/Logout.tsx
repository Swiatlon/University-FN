import { useEffect } from 'react';
import { useSendLogoutMutation } from 'Redux/Slices/auth/authApiSlice';

function Logout() {
  const [sendLogout] = useSendLogoutMutation();

  useEffect(() => {
    sendLogout(undefined);
  });

  return null;
}

export default Logout;
