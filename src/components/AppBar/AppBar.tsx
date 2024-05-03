import { selectTokenExpirationTime } from '@features/auth/authSlice';
import { parseISO, intervalToDuration, isAfter } from 'date-fns';
import { Box, Typography } from '@mui/material';
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
        background: 'white',
        top: 0,
        zIndex: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', alignContent: 'center', mx: 6, height: '100%' }}>
        <Typography variant="h5">Personal Data</Typography>
        <Typography sx={{ ml: 'auto' }} variant="body1">{`Timer: ${timeLeft}`}</Typography>
      </Box>
    </Box>
  );
}

export default AppBar;
