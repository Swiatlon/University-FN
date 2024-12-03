import type { RolesEnum } from 'contract/enums/Enums';

export interface ILoginRequest {
  identifier: string;
  password: string;
  rememberMe: boolean;
  sessionID: string;
}

export interface ILoginResponse {
  accessToken: string;
}

export interface ILogoutResponse {}

export interface IRefreshRequest {}

export interface IRefreshResponse {
  accessToken: string;
}

export interface IDecodedJwt {
  token: string;
  accountId: string;
  roles: RolesEnum[];
  exp?: number;
  iat?: number;
}
