import { expect } from '@jest/globals';
import { formatTime, formatFullDateTime } from './Date.Utils';

describe('formatTime function', () => {
  test('it formats time correctly', () => {
    const date = new Date('2024-12-11T14:30:00');
    expect(formatTime(date)).toBe('14:30');
  });
});

describe('formatFullDateTime function', () => {
  test('it formats full date and time correctly', () => {
    const date = new Date('2024-12-11T14:30:00');
    expect(formatFullDateTime(date)).toBe('Wednesday, 11 December 2024 at 14:30');
  });

  test('it returns empty string for null date input', () => {
    const result = formatFullDateTime(null);
    expect(result).toBe('');
  });
});
