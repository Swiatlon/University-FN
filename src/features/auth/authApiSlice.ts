import apiSlice from '../api/apiSlice';
import { logOut, setCredentials } from './authSlice';

interface Credentials {
  username: string;
  password: string;
}

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: (credentials: Credentials) => ({
        url: '/auth',
        method: 'POST',
        body: { ...credentials },
      }),
    }),

    sendLogout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then(() => {
            dispatch(logOut());
            dispatch(apiSlice.util.resetApiState());
          })
          .catch((err: string) => {
            return err;
          });
      },
    }),

    refresh: builder.mutation({
      query: () => ({
        url: '/auth/refresh',
        method: 'GET',
      }),
      onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then(({ data: { accessToken } }: { data: { accessToken: string } }) => {
            dispatch(setCredentials({ accessToken }));
          })
          .catch((err: string) => {
            return err;
          });
      },
    }),
  }),
});

export const { useLoginMutation, useSendLogoutMutation, useRefreshMutation } = authApiSlice;
