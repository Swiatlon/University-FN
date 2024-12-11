import { useEffect } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { isAfter, parseISO } from 'date-fns';
import { useAppBarTimer } from 'hooks/useAppBarTimer';
import { useTypedSelector } from 'hooks/useStore.Hooks';
import { useSendLogoutMutation } from 'redux/apiSlices/auth/Auth.Api.Slice';
import { selectTokenExpirationTime } from 'redux/stateSlices/auth/Auth.State.Slice';
import { timerStylesByState } from '../constants/constants';
import AppBarExtSessionIcon from './AppBarExtSessionIcon';

function AppBarTimer() {
  const tokenExpirationTime = useTypedSelector(selectTokenExpirationTime);
  const isMobile = useMediaQuery('(max-width:600px)');
  const { timeLeft, timerState } = useAppBarTimer();
  const { color, icon } = timerStylesByState[timerState];
  const [sendLogout] = useSendLogoutMutation();

  useEffect(() => {
    if (!tokenExpirationTime || isAfter(new Date(), parseISO(tokenExpirationTime))) {
      sendLogout();
      return;
    }
  }, [timeLeft]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {icon}
      <Typography variant="body1" sx={{ color }}>
        {!isMobile && 'Timer:'} {timeLeft}
      </Typography>
      <AppBarExtSessionIcon timerColor={color} />
    </Box>
  );
}

export default AppBarTimer;
