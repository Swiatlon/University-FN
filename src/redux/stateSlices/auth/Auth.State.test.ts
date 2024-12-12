import { RolesEnum } from 'contract/enums/Enums';
import { parseJwt } from 'redux/utils/JWT/JWT.Utils';
import reducer, {
  IAuthState,
  logOut,
  selectAccountId,
  selectCurrentToken,
  selectTokenExpirationTime,
  selectUserRoles,
  setCredentials,
} from './Auth.State.Slice';

jest.mock('redux/utils/JWT/JWT.Utils', () => ({
  parseJwt: jest.fn(),
}));

describe('authSlice tests', () => {
  const initialState: IAuthState = {
    token: null,
    accountId: null,
    expDate: null,
    userRoles: [],
  };

  beforeAll(() => {
    Object.defineProperty(global, 'localStorage', {
      value: {
        setItem: jest.fn(),
        removeItem: jest.fn(),
      },
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should handle setCredentials', () => {
    const mockAccessToken = 'mockAccessToken';
    const mockResult = {
      exp: Math.floor(Date.now() / 1000) + 3600,
      roles: [RolesEnum.ADMIN, RolesEnum.USER],
      accountId: 123,
    };

    (parseJwt as jest.Mock).mockReturnValue(mockResult);
    const action = setCredentials({ accessToken: mockAccessToken });
    const newState = reducer(initialState, action);
    expect(newState).toEqual({
      token: mockAccessToken,
      expDate: new Date(mockResult.exp * 1000).toISOString(),
      userRoles: mockResult.roles,
      accountId: mockResult.accountId,
    });
    expect(localStorage.setItem).toHaveBeenCalledWith('accessToken', mockAccessToken);
  });

  test('should handle logOut', () => {
    const mockAccessToken: IAuthState = {
      token: 'existingToken',
      accountId: 123,
      expDate: new Date().toISOString(),
      userRoles: [RolesEnum.STUDENT],
    };

    const action = logOut();
    const newState = reducer(mockAccessToken, action);
    expect(newState).toEqual(initialState);
  });

  test('should correctly select current token', () => {
    const mockState: IAuthState = { ...initialState, token: 'testToken' };

    const result = selectCurrentToken({ authSlice: mockState });
    expect(result).toBe('testToken');
  });

  test('should correctly select token expiration time', () => {
    const mockState: IAuthState = { ...initialState, expDate: '2024-12-31T23:59:59Z' };

    const result = selectTokenExpirationTime({ authSlice: mockState });
    expect(result).toBe('2024-12-31T23:59:59Z');
  });

  test('should correctly select user roles', () => {
    const mockState: IAuthState = { ...initialState, userRoles: [RolesEnum.ADMIN, RolesEnum.USER] };

    const result = selectUserRoles({ authSlice: mockState });
    expect(result).toStrictEqual([RolesEnum.ADMIN, RolesEnum.USER]);
  });

  test('should correctly select account ID', () => {
    const mockState: IAuthState = { ...initialState, accountId: 123 };

    const result = selectAccountId({ authSlice: mockState });
    expect(result).toStrictEqual(123);
  });
});
