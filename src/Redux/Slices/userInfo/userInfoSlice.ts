import { createSelector } from '@reduxjs/toolkit';
import Api from 'Redux/Api';
import type { RootState } from 'Redux/Store';

interface Role {
  id: string;
  name: string;
}

interface BackendResponse {
  roles: Role[];
  name: string;
  surname: string;
}

interface TransformedFrontReponse {
  roles: string[];
  name: string;
  surname: string;
}

export const userInfoSlice = Api.injectEndpoints({
  endpoints: builder => ({
    getUserInfo: builder.query<TransformedFrontReponse, unknown>({
      query: () => {
        return {
          url: 'api/userInfo',
          params: {
            visibilityFields: ['name', 'surname'],
          },
        };
      },
      transformResponse: (response: BackendResponse) => ({
        ...response,
        roles: response.roles.map(role => role.name),
      }),
    }),
  }),
});

export const { useGetUserInfoQuery } = userInfoSlice;

const selectUserInfoResult = (state: RootState) => userInfoSlice.endpoints.getUserInfo.select(undefined)(state);

export const selectUserRoles = createSelector([selectUserInfoResult], userInfoResult => userInfoResult.data?.roles ?? []);
