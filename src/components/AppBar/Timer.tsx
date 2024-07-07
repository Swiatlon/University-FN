import { Typography, useMediaQuery } from '@mui/material';
import { useSendLogoutMutation } from 'Redux/Slices/auth/authApiSlice';
import { selectTokenExpirationTime } from 'Redux/Slices/auth/authSlice';
import { parseISO, isAfter, intervalToDuration } from 'date-fns';
import { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Timer() {
  const [sendLogout] = useSendLogoutMutation();
  const tokenExpirationTime = useSelector(selectTokenExpirationTime);
  const [timeLeft, setTimeLeft] = useState('');
  const isMobile = useMediaQuery('(max-width:600px)');

  useLayoutEffect(() => {
    const updateTimer = async () => {
      const now = new Date();
      const expirationDate = parseISO(tokenExpirationTime);
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

    const timerId = setInterval(updateTimer, 100);

    return () => {
      clearInterval(timerId);
    };
  }, [tokenExpirationTime]);

  return (
    <Typography variant="body1" sx={{ m: 'auto' }}>
      {isMobile ? '' : 'Timer:'} {timeLeft}
    </Typography>
  );
}

export default Timer;
