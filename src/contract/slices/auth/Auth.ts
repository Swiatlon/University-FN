import type { RolesEnum } from 'Contract/Enums/Enums';

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

export interface IRefreshRequest {
  sessionID: string;
}

export interface IRefreshResponse {
  accessToken: string;
}

export interface IDecodedJwt {
  token: string;
  roles: RolesEnum[];
  exp?: number;
  iat?: number;
}
