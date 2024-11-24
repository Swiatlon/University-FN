import { useLayoutEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ErrorOutline, WarningAmber } from '@mui/icons-material';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { parseISO, isAfter, intervalToDuration } from 'date-fns';
import _ from 'lodash';
import { useSendLogoutMutation } from 'redux/apiSlices/auth/Auth.Api.Slice';
import { selectTokenExpirationTime } from 'redux/stateSlices/auth/Auth.State.Slice';
import AppBarExtSessionIcon from './AppBarExtSessionIcon';

export enum TimerStatesEnum {
  Critical = 'critical',
  Warning = 'warning',
  Normal = 'normal',
}

interface ITimeThresholds {
  minutes: number;
  state: TimerStatesEnum;
}

interface ITimerStylesKeys {
  color: string;
  icon?: JSX.Element;
}

const timerStylesByState: Record<TimerStatesEnum, ITimerStylesKeys> = {
  [TimerStatesEnum.Critical]: { color: '#f70000', icon: <ErrorOutline sx={{ color: '#f70000', mr: 1 }} /> },
  [TimerStatesEnum.Warning]: { color: '#ff9800', icon: <WarningAmber sx={{ color: '#ff9800', mr: 1 }} /> },
  [TimerStatesEnum.Normal]: { color: 'black' },
};

const timeThresholds: ITimeThresholds[] = [
  { minutes: 5, state: TimerStatesEnum.Critical },
  { minutes: 10, state: TimerStatesEnum.Warning },
];

function AppBarTimer() {
  const [sendLogout] = useSendLogoutMutation();
  const tokenExpirationTime = useSelector(selectTokenExpirationTime);
  const [timeLeft, setTimeLeft] = useState('');
  const [timerState, setTimerState] = useState<TimerStatesEnum>(TimerStatesEnum.Normal);
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

      const { minutes = 0, seconds = 0 } = intervalToDuration({ start: now, end: expirationDate });
      const matchingThreshold = _.find(timeThresholds, threshold => minutes < threshold.minutes);
      const formattedTime = `
        ${_.padStart(minutes.toString(), 2, '0')}:
        ${_.padStart(seconds.toString(), 2, '0')}
      `;

      setTimeLeft(formattedTime);
      setTimerState(matchingThreshold?.state ?? TimerStatesEnum.Normal);
    };

    const timerId = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [tokenExpirationTime]);

  const { color, icon } = useMemo(() => timerStylesByState[timerState], [timerState]);

  return (
    <Box display="flex" alignItems="center">
      {icon}
      <Typography variant="body1" sx={{ color }}>
        {!isMobile && 'Timer:'} {timeLeft}
      </Typography>
      <AppBarExtSessionIcon timerColor={color} />
    </Box>
  );
}

export default AppBarTimer;
