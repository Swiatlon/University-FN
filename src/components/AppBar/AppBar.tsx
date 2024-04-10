import { selectTokenExpirationTime } from '@features/auth/authSlice';
import { parseISO, intervalToDuration, isAfter } from 'date-fns';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSendLogoutMutation } from '@features/auth/authApiSlice';
/* eslint-disable */

function AppBar() {
  const [sendLogout] = useSendLogoutMutation();
  const tokenExpirationTime = useSelector(selectTokenExpirationTime);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const expirationDate = parseISO(tokenExpirationTime);
      if (isAfter(now, expirationDate)) {
        clearInterval(timerId);
        sendLogout();
        return;
      }
      const duration = intervalToDuration({ start: now, end: expirationDate });

      const minutes = duration.minutes?.toString().padStart(2, '0');
      const seconds = duration.seconds?.toString().padStart(2, '0');
      const formatted = `${minutes}:${seconds}`;

      setTimeLeft(formatted);
    };

    const timerId = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [tokenExpirationTime]);

  return <Box sx={{ width: '100%', height: 'fit-content', background: 'purple', position: 'sticky', top: 0, textAlign: 'center' }}>{`Timer: ${timeLeft}`}</Box>;
}

export default AppBar;
