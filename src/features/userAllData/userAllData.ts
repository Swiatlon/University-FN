import apiSlice from '../api/apiSlice';

export interface IUserData {
  id: string;
  country: string;
  city: string;
  postalCode: string;
  street: string;
  buildingNumber: string;
  apartmentNumber: string;
  name: string;
  surname: string;
  dateOfBirth: string;
  pesel: string;
  gender: string;
  addressId: string;
  nationality: string;
}

export const userAllData = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUserAllData: builder.query<IUserData, undefined>({
      query: () => ({
        url: 'api/personalData',
        params: {
          fullDateFormat: true,
        },
      }),
    }),
  }),
});

export const { useGetUserAllDataQuery } = userAllData;
