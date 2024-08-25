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
      query: () => ({
        url: '/api/community/events',
      }),
      providesTags: ['eventsGet'],
    }),

    createEvent: builder.mutation<ICreateEventResponse, ICreateEventRequest>({
      query: newEvent => ({
        url: '/api/community/events',
        method: 'POST',
        body: newEvent,
      }),
      invalidatesTags: ['eventsGet'],
    }),
  }),
});

export const { useGetAllTeachersQuery, useGetAllEventsQuery, useCreateEventMutation } = communitySlice;
