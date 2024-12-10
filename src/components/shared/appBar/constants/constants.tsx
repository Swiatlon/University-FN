import { ErrorOutline, WarningAmber } from '@mui/icons-material';

export enum TimerStatesEnum {
  Critical = 'critical',
  Warning = 'warning',
  Normal = 'normal',
}

export interface ITimerStylesKeys {
  color: string;
  icon?: JSX.Element;
}

export const timerStylesByState: Record<TimerStatesEnum, ITimerStylesKeys> = {
  [TimerStatesEnum.Critical]: { color: '#f70000', icon: <ErrorOutline sx={{ color: '#f70000', mr: 1 }} /> },
  [TimerStatesEnum.Warning]: { color: '#ff9800', icon: <WarningAmber sx={{ color: '#ff9800', mr: 1 }} /> },
  [TimerStatesEnum.Normal]: { color: 'black' },
};

export const timeThresholds = [
  { minutes: 5, state: TimerStatesEnum.Critical },
  { minutes: 10, state: TimerStatesEnum.Warning },
];
