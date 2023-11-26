import apiSlice from '../api/apiSlice';

export const doctorsSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getDoctors: builder.query({
      query: () => `api/doctors`,
      method: 'GET',
    }),
  }),
});

export const { useGetDoctorsQuery } = doctorsSlice;
