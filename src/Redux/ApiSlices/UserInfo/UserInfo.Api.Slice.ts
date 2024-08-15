import Api from 'Redux/Api';
import type { IGetUserInfoReponse } from 'Contract/Slices/UserInfo/UserInfo';

export const userInfoSlice = Api.injectEndpoints({
  endpoints: builder => ({
    getUserInfo: builder.query<IGetUserInfoReponse, void>({
      query: () => {
        return {
          url: 'api/userInfo',
          params: {
            visibilityFields: ['name', 'surname'],
          },
        };
      },
    }),
  }),
});

export const { useGetUserInfoQuery } = userInfoSlice;
