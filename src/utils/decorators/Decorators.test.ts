import { expect } from '@jest/globals';
import { beautifyNumbers, calculatePercentage } from './Decorators';

describe('beautifyNumbers function', () => {
  test('it decorate number', () => {
    expect(beautifyNumbers(1212211212).replace(/\s+/g, ' ')).toBe('1 212 211 212');
  });
});

describe('calculatePercentage function', () => {
  test('should return 0% when the total number of elements is 0', () => {
    expect(calculatePercentage(0, 0)).toBe('0%');
  });

  test('should return correct percentage for valid inputs', () => {
    expect(calculatePercentage(50, 200)).toBe('25%');
    expect(calculatePercentage(1, 4)).toBe('25%');
    expect(calculatePercentage(3, 4)).toBe('75%');
  });

  test('should handle rounding correctly', () => {
    expect(calculatePercentage(1, 3)).toBe('33%');
    expect(calculatePercentage(2, 3)).toBe('67%');
  });

  test('should return 100% if the count is equal to the total number of elements', () => {
    expect(calculatePercentage(100, 100)).toBe('100%');
  });

  test('should handle very small numbers correctly', () => {
    expect(calculatePercentage(1, 1000000)).toBe('0%');
  });

  test('should handle the case where count is greater than the total number of elements', () => {
    expect(calculatePercentage(500, 100)).toBe('500%');
  });
});
