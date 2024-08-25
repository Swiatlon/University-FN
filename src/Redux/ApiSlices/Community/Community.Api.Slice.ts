import Api from 'Redux/Config/Api';
import type {
  IGetAllTeachersResponse,
  IGetAllTeachersQueryParams,
  IGetAllEventsResponse,
  ICreateEventRequest,
  ICreateEventResponse,
} from 'Contract/Slices/Community/Community';

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

    getAllEvents: builder.query<IGetAllEventsResponse[], void>({
      query: () => {
        return {
          url: '/api/community/events',
        };
      },
    }),

    createEvent: builder.mutation<ICreateEventResponse, ICreateEventRequest>({
      query: newEvent => {
        return {
          url: '/api/community/events',
          method: 'POST',
          body: newEvent,
        };
      },
    }),
  }),
});

export const { useGetAllTeachersQuery, useGetAllEventsQuery, useCreateEventMutation } = communitySlice;
