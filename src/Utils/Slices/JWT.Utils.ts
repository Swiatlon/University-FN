import type { IDecodedJwt } from 'Contract/Slices/Auth/Auth';

export function parseJwt(token: string | null): IDecodedJwt | undefined {
  if (!token) {
    return undefined;
  }

  const [, base64Url] = token.split('.');

  if (!base64Url) {
    return undefined;
  }

  const base64 = base64Url.replace('-', '+').replace('_', '/');

  return JSON.parse(window.atob(base64)) as IDecodedJwt;
}
