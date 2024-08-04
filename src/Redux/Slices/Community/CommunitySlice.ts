import type { getAllTeachersResponse, IGetAllTeachersQueryParams } from 'Contract/Slices/Community/Community';
import Api from 'Redux/Api';

export const communitySlice = Api.injectEndpoints({
  endpoints: builder => ({
    getAllTeachers: builder.query<getAllTeachersResponse, IGetAllTeachersQueryParams>({
      query: ({ pagination, selectFields, search }) => {
        return {
          url: '/api/community/getAllTeachers',
          params: {
            pagination,
            selectFields,
            search,
          },
        };
      },
    }),
  }),
});

export const { useGetAllTeachersQuery } = communitySlice;
