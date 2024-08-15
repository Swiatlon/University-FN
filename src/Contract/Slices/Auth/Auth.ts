import type { RolesEnum } from 'Contract/Enums/Enums';

export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
}

export interface ILogoutResponse {}

export interface IRefreshResponse {
  accessToken: string;
}

export interface IDecodedJwt {
  token: string;
  roles: RolesEnum[];
  exp?: number;
  iat?: number;
}
