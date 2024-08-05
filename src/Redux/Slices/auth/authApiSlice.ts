import Api from 'Redux/Api';
import { logOut, setCredentials } from './authSlice';
import { extendedOnQueryStartedWithNotifications } from 'Utils/Slices/ExtendedOnQueryStarted';

interface Credentials {
  username: string;
  password: string;
}

const authApiSlice = Api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: (credentials: Credentials) => ({
        url: '/auth',
        method: 'POST',
        body: credentials,
      }),
      onQueryStarted: extendedOnQueryStartedWithNotifications({
        successMessage: 'Login successful!',
        successCallback: (data: { accessToken: string }, dispatch) => {
          if (setCredentials) {
            dispatch(setCredentials({ accessToken: data.accessToken }));
          }
        },
      }),
    }),

    sendLogout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      onQueryStarted: extendedOnQueryStartedWithNotifications({
        successMessage: 'Logout successful',
        successCallback: (_data, dispatch) => {
          if (logOut) {
            dispatch(logOut(undefined));
            dispatch(Api.util.resetApiState());
          }
        },
      }),
    }),

    refresh: builder.mutation({
      query: () => ({
        url: '/auth/refresh',
        method: 'GET',
      }),
      onQueryStarted: extendedOnQueryStartedWithNotifications({
        successMessage: 'Token refreshed',
        successCallback: (data: { accessToken: string }, dispatch) => {
          if (setCredentials) {
            dispatch(setCredentials({ accessToken: data.accessToken }));
          }
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useSendLogoutMutation, useRefreshMutation } = authApiSlice;
export default authApiSlice;
