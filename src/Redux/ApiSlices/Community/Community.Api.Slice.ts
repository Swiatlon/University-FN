import Api from 'Redux/Api';
import type { IGetAllTeachersResponse, IGetAllTeachersQueryParams } from 'Contract/Slices/Community/Community';

export const communitySlice = Api.injectEndpoints({
  endpoints: builder => ({
    getAllTeachers: builder.query<IGetAllTeachersResponse, IGetAllTeachersQueryParams>({
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
