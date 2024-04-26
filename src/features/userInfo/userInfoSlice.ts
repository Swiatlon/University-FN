import apiSlice from '../api/apiSlice';

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

export const userInfoSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUserInfo: builder.query<TransformedFrontReponse, unknown>({
      query: () => 'api/userInfo',
      transformResponse: (response: BackendResponse) => ({
        ...response,
        roles: response.roles.map(role => role.name),
      }),
    }),
  }),
});

export const { useGetUserInfoQuery } = userInfoSlice;
