import apiSlice from '../api/apiSlice';

export const specializationsSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSpecializations: builder.query({
      query: () => `api/specializations`,
      method: 'GET',
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsSlice;
