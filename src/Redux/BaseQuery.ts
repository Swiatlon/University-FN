import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { setCredentials } from './Slices/auth/authSlice';
import qs from 'qs';

interface AuthState {
  token: string | null;
  expDate: string | null;
}

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_DEVELOPMENT_BACKEND_ADDRESS,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as { authSlice: AuthState }).authSlice;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
  paramsSerializer: params =>
    qs.stringify(params, {
      arrayFormat: 'brackets',
      encode: false,
    }),
});

export const baseQueryWithReauth: BaseQueryFn<FetchArgs | string, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status !== 403) {
    return result;
  }

  const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);

  if (refreshResult.data) {
    const data = refreshResult.data as { accessToken?: string };

    if (data.accessToken) {
      api.dispatch(setCredentials({ accessToken: data.accessToken }));
      result = await baseQuery(args, api, extraOptions);

      return result;
    }
  }

  if (refreshResult.error) {
    const errorData = refreshResult.error.data as { message?: string };
    errorData.message = 'Your login has expired.';
  }

  return refreshResult;
};
