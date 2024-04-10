import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials } from '../auth/authSlice';
/* eslint-disable */

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_DEVELOPMENT_BACKEND_ADDRESS,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const { token } = getState().authSlice;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 403) {
    const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);

    if (refreshResult.data) {
      api.dispatch(setCredentials({ ...refreshResult.data }));

      return baseQuery(args, api, extraOptions);
    }

    if (refreshResult.error?.status) {
      refreshResult.error.data.message = 'Your login has expired.';
    }

    return refreshResult;
  }

  return result;
};

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User', 'Transaction'],
   
  endpoints: builder => ({}),
});

export default apiSlice;
