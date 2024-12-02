import { createSelector } from '@reduxjs/toolkit';
import { RolesEnum } from 'contract/enums/Enums';
import { startCase, toLower } from 'lodash';
import Api from 'redux/config/Api';
import type {
  IGetLoggedAccountBasicDataReponse,
  IGetLoggedAccountBasicDataTransformedReponse,
} from 'contract/slices/loggedAccount/LoggedAccount';

export const LoggedAccountSlice = Api.injectEndpoints({
  endpoints: builder => ({
    getLoggedAccountBasicData: builder.query<IGetLoggedAccountBasicDataTransformedReponse, void>({
      query: () => {
        return {
          url: '/loggedAccount/basic-data',
          params: {
            visibilityFields: ['name', 'surname', 'organizer'],
          },
        };
      },
      transformResponse: (response: IGetLoggedAccountBasicDataReponse) => ({
        ...response,
        roles: response.roles.map(role => startCase(toLower(RolesEnum[role]))),
      }),
    }),
  }),
});

export const selectAccountId = createSelector(
  LoggedAccountSlice.endpoints.getLoggedAccountBasicData.select(),
  result => result.data?.accountId
);

export const selectId = createSelector(
  LoggedAccountSlice.endpoints.getLoggedAccountBasicData.select(),
  result => result.data?.id
);

export const selectAccountFullName = createSelector(
  LoggedAccountSlice.endpoints.getLoggedAccountBasicData.select(),
  result => ({ name: result.data?.name, surname: result.data?.surname })
);

export const { useGetLoggedAccountBasicDataQuery } = LoggedAccountSlice;
