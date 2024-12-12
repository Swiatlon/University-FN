import type { IDecodedJwt } from 'contract/slices/auth/Auth';

export function parseJwt(token: string | null): IDecodedJwt | undefined {
  if (!token) {
    return undefined;
  }
  const [, base64Url] = token.split('.');

  if (!base64Url) {
    return undefined;
  }

  const base64 = base64Url.replace('-', '+').replace('_', '/');
  const result = JSON.parse(window.atob(base64)) as IDecodedJwt;

  return result;
}
