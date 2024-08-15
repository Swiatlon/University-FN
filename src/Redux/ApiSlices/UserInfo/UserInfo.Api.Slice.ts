import { RolesEnum } from 'Contract/Enums/Enums';
import { startCase, toLower } from 'lodash';
import Api from 'Redux/Api';
import type { IGetUserInfoReponse, IGetUserInfoTransformedReponse } from 'Contract/Slices/UserInfo/UserInfo';

export const userInfoSlice = Api.injectEndpoints({
  endpoints: builder => ({
    getUserInfo: builder.query<IGetUserInfoTransformedReponse, void>({
      query: () => {
        return {
          url: 'api/userInfo',
          params: {
            visibilityFields: ['name', 'surname'],
          },
        };
      },
      transformResponse: (response: IGetUserInfoReponse) => ({
        ...response,
        roles: response.roles.map(role => startCase(toLower(RolesEnum[role as keyof typeof RolesEnum]))),
      }),
    }),
  }),
});

export const { useGetUserInfoQuery } = userInfoSlice;
