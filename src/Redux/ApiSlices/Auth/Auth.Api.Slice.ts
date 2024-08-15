import Api from 'Redux/Api';
import { extendedOnQueryStartedWithNotifications } from 'Utils/Slices/ExtendedOnQueryStarted';
import { logOut, setCredentials } from '../../StateSlices/Auth/Auth.State.Slice';
import type { ILoginRequest, ILoginResponse, ILogoutResponse, IRefreshResponse } from 'Contract/Slices/Auth/Auth';

const authApiSlice = Api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<ILoginResponse, ILoginRequest>({
      query: credentials => ({
        url: '/auth',
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
        method: 'GET',
      }),
      onQueryStarted: extendedOnQueryStartedWithNotifications({
        successMessage: 'Token refreshed',
        successCallback: (data, dispatch) => {
          dispatch(setCredentials({ accessToken: data.accessToken }));
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useSendLogoutMutation, useRefreshMutation } = authApiSlice;
export default authApiSlice;
