import { RolesEnum } from 'contract/enums/Enums';
import { startCase, toLower } from 'lodash';
import Api from 'redux/config/Api';
import type { IGetUserInfoReponse, IGetUserInfoTransformedReponse } from 'contract/slices/userInfo/UserInfo';

export const userInfoSlice = Api.injectEndpoints({
  endpoints: builder => ({
    getUserInfo: builder.query<IGetUserInfoTransformedReponse, void>({
      query: () => {
        return {
          url: 'api/userInfo',
          params: {
            visibilityFields: ['name', 'surname', 'organizer'],
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
