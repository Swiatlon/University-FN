import { selectTokenExpirationTime } from '@features/auth/authSlice';
import { parseISO, intervalToDuration, isAfter } from 'date-fns';
import { Box } from '@mui/material';
import { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSendLogoutMutation } from '@features/auth/authApiSlice';

function AppBar() {
  const [sendLogout] = useSendLogoutMutation();
  const tokenExpirationTime = useSelector(selectTokenExpirationTime);
  const [timeLeft, setTimeLeft] = useState('');

  useLayoutEffect(() => {
    const updateTimer = async () => {
      const now = new Date();
      const expirationDate = parseISO(tokenExpirationTime!);
      if (isAfter(now, expirationDate)) {
        clearInterval(timerId);
        await sendLogout();
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

  return (
    <Box
      sx={{
        width: '100%',
        height: '80px',
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, #02081f 100%,rgba(6, 14, 44, 1) 120%)',
        boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
      }}
    >{`Timer: ${timeLeft}`}</Box>
  );
}

export default AppBar;
