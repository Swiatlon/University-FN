import Api from 'redux/config/Api';
import { extendedOnQueryStartedWithNotifications } from 'redux/utils/ExtendedOnQueryStarted';
import { logOut, setCredentials } from '../../stateSlices/auth/Auth.State.Slice';
import type { ILoginRequest, ILoginResponse, ILogoutResponse, IRefreshResponse } from 'contract/slices/auth/Auth';

const authApiSlice = Api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<ILoginResponse, ILoginRequest>({
      query: credentials => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      onQueryStarted: extendedOnQueryStartedWithNotifications({
        successMessage: 'Login successful!',
        successCallback: (data, dispatch) => {
          dispatch(setCredentials({ accessToken: data.accessToken }));
        },
      }),
    }),

    sendLogout: builder.mutation<ILogoutResponse, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      onQueryStarted: extendedOnQueryStartedWithNotifications({
        successMessage: 'Logout successful',
        successCallback: (_data, dispatch) => {
          dispatch(logOut());
          dispatch(Api.util.resetApiState());
        },
      }),
    }),

    refresh: builder.mutation<IRefreshResponse, void>({
      query: () => ({
        url: '/auth/refresh',
        method: 'POST',
      }),
      onQueryStarted: async (_arg, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        dispatch(setCredentials({ accessToken: data.accessToken }));
      },
    }),

    randomLogin: builder.mutation<ILoginResponse, void>({
      query: () => ({
        url: '/auth/random-login',
        method: 'POST',
      }),
      onQueryStarted: extendedOnQueryStartedWithNotifications({
        successMessage: 'Random login successful!',
        successCallback: (data, dispatch) => {
          dispatch(setCredentials({ accessToken: data.accessToken }));
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useSendLogoutMutation, useRefreshMutation, useRandomLoginMutation } = authApiSlice;
export default authApiSlice;
