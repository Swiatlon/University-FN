import { useState, useLayoutEffect } from 'react';
import { TimerStatesEnum } from 'components/shared/appBar/constants/constants';
import { getTimerState, calculateTimeLeft } from 'components/shared/appBar/utils/Timer.Utils';
import { parseISO } from 'date-fns';
import { selectTokenExpirationTime } from 'redux/stateSlices/auth/Auth.State.Slice';
import { useTypedSelector } from './useStore.Hooks';

export const useAppBarTimer = () => {
  const [timeLeft, setTimeLeft] = useState('15:00');
  const [timerState, setTimerState] = useState<TimerStatesEnum>(TimerStatesEnum.Normal);
  const tokenExpirationTime = useTypedSelector(selectTokenExpirationTime);

  useLayoutEffect(() => {
    if (!tokenExpirationTime) return;

    const expirationDate = parseISO(tokenExpirationTime);
    const updateTimer = () => {
      const { minutes, formattedTime } = calculateTimeLeft(expirationDate);

      setTimeLeft(formattedTime);
      setTimerState(getTimerState(minutes));
    };

    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, [tokenExpirationTime]);

  return { timeLeft, timerState };
};
