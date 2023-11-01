import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_DEVELOPMENT_BACKEND_ADDRESS,
  }),
  tagTypes: [],
  endpoints: builder => ({}),
});

export default apiSlice;
