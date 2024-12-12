import { TimerStatesEnum } from '../constants/constants';
import { calculateTimeLeft, getTimerState } from './Timer.Utils';

describe('calculateTimeLeft function', () => {
  test('should return the correct time left when the expiration date is in the future', () => {
    const fiveMinutes = new Date(new Date().getTime() + 5 * 60 * 1000);
    const result = calculateTimeLeft(fiveMinutes);

    expect(result.minutes).toBe(5);
    expect(result.seconds).toBe(0);
    expect(result.formattedTime).toBe('05:00');
  });

  test('should handle edge case where minutes and seconds are not zero', () => {
    const oneMinuteOneSecond = new Date(new Date().getTime() + 61 * 1000);
    const result = calculateTimeLeft(oneMinuteOneSecond);

    expect(result.minutes).toBe(1);
    expect(result.seconds).toBe(1);
    expect(result.formattedTime).toBe('01:01');
  });
});

describe('getTimerState function', () => {
  test('should return Critical state when minutes are below 5', () => {
    const result = getTimerState(4);
    expect(result).toBe(TimerStatesEnum.Critical);
  });

  test('should return Warning state when minutes are between 5 and 10', () => {
    const result = getTimerState(6);
    expect(result).toBe(TimerStatesEnum.Warning);
  });

  test('should return Normal state when minutes are above 10', () => {
    const result = getTimerState(15);
    expect(result).toBe(TimerStatesEnum.Normal);
  });

  test('should return Critical state when minutes are exactly 5', () => {
    const result = getTimerState(5);
    expect(result).toBe(TimerStatesEnum.Critical);
  });

  test('should return Warning state when minutes are exactly 10', () => {
    const result = getTimerState(10);
    expect(result).toBe(TimerStatesEnum.Warning);
  });

  test('should return Normal state when minutes are above the last threshold (10)', () => {
    const result = getTimerState(20);
    expect(result).toBe(TimerStatesEnum.Normal);
  });
});
