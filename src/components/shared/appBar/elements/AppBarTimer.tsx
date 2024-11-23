import { useLayoutEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ErrorOutline, WarningAmber } from '@mui/icons-material';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { parseISO, isAfter, intervalToDuration } from 'date-fns';
import { useSendLogoutMutation } from 'redux/apiSlices/auth/Auth.Api.Slice';
import { selectTokenExpirationTime } from 'redux/stateSlices/auth/Auth.State.Slice';
import AppBarExtSessionIcon from './AppBarExtSessionIcon';

type WarningType = 'deadline' | 'alert' | 'default';

const timerStyles = {
  deadline: { color: '#f70000', icon: <ErrorOutline sx={{ color: '#f70000', marginRight: 1 }} /> },
  alert: { color: '#ff9800', icon: <WarningAmber sx={{ color: '#ff9800', marginRight: 1 }} /> },
  default: { color: 'black', icon: null },
};

const timeThresholds: { minutes: number; warning: WarningType }[] = [
  { minutes: 5, warning: 'deadline' },
  { minutes: 10, warning: 'alert' },
];

function AppBarTimer() {
  const [sendLogout] = useSendLogoutMutation();
  const tokenExpirationTime = useSelector(selectTokenExpirationTime);
  const [timeLeft, setTimeLeft] = useState('');
  const [timeWarning, setTimeWarning] = useState<WarningType>('default');
  const isMobile = useMediaQuery('(max-width:600px)');

  useLayoutEffect(() => {
    const updateTimer = async () => {
      const now = new Date();
      const expirationDate = parseISO(tokenExpirationTime ?? '');
      if (isAfter(now, expirationDate)) {
        clearInterval(timerId);
        await sendLogout();
        return;
      }

      const duration = intervalToDuration({ start: now, end: expirationDate });

      const minutes = duration.minutes ?? 0;
      const seconds = duration.seconds ?? 0;

      const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      setTimeLeft(formattedTime);

      const matchingThreshold = timeThresholds.find(threshold => minutes < threshold.minutes);
      setTimeWarning(matchingThreshold ? matchingThreshold.warning : 'default');
    };

    const timerId = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [tokenExpirationTime]);

  const { color, icon } = useMemo(() => timerStyles[timeWarning], [timeWarning]);

  return (
    <Box display="flex" alignItems="center" sx={{ lineHeight: 1 }}>
      {icon ? (
        <Box
          sx={{
            marginRight: '2px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {icon}
        </Box>
      ) : null}
      <Typography
        variant="body1"
        sx={{
          color,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {!isMobile && 'Timer:'} {timeLeft}
      </Typography>
      <AppBarExtSessionIcon timerColor={color} />
    </Box>
  );
}

export default AppBarTimer;
