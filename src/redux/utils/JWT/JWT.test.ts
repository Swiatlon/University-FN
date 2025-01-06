import { expect } from '@jest/globals';
import { RolesEnum } from 'contract/enums/Enums';
import { parseJwt } from './JWT.Utils';
import type { IDecodedJwt } from 'contract/slices/auth/Auth';

describe('parseJwt function', () => {
  test('should return decoded JWT when given a valid token', () => {
    const validToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJTVFVERU5UIl0sImFjY291bnRJZCI6NzI5LCJpYXQiOjE3MzM5NTI2OTQsImV4cCI6MTczMzk1MzU5NH0.7NzkG5DIvyJdwm8ngYZdx0prO_mmwzXb4aWH6qBLaKE';

    const mockDecodedJwt: IDecodedJwt = {
      roles: [RolesEnum.STUDENT],
      accountId: 729,
      iat: 1733952694,
      exp: 1733953594,
    };

    const mockWindow: Partial<Window> = {
      atob: jest.fn().mockReturnValue(JSON.stringify(mockDecodedJwt)),
    };
    global.window = mockWindow as Window & typeof globalThis;

    const result = parseJwt(validToken);

    expect(result).toEqual(mockDecodedJwt);
    expect(result?.accountId).toBe(729);
    expect(result?.roles).toEqual(['STUDENT']);
    expect(result?.exp).toBe(1733953594);
    expect(result?.iat).toBe(1733952694);
  });

  test('should return undefined when token is null', () => {
    const result = parseJwt(null);
    expect(result).toBeUndefined();
  });

  test('should return undefined when token is malformed', () => {
    const invalidToken = 'invalidToken';
    const result = parseJwt(invalidToken);
    expect(result).toBeUndefined();
  });

  test('should return undefined when token has no payload', () => {
    const incompleteToken = 'header.';
    const result = parseJwt(incompleteToken);
    expect(result).toBeUndefined();
  });
});
