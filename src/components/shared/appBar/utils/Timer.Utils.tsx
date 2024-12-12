import { intervalToDuration } from 'date-fns';
import _ from 'lodash';
import { TimerStatesEnum, timeThresholds } from '../constants/constants';

interface ICaluclateTimeLeft {
  minutes: number;
  seconds: number;
  formattedTime: string;
}

export const calculateTimeLeft = (expirationDate: Date): ICaluclateTimeLeft => {
  const now = new Date();
  const { minutes = 0, seconds = 0 } = intervalToDuration({ start: now, end: expirationDate });
  const formattedTime = `${_.padStart(minutes.toString(), 2, '0')}:${_.padStart(seconds.toString(), 2, '0')}`;

  return { minutes, seconds, formattedTime };
};

export const getTimerState = (minutes: number): TimerStatesEnum => {
  return _.find(timeThresholds, threshold => minutes <= threshold.minutes)?.state ?? TimerStatesEnum.Normal;
};
