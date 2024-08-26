import Api from 'Redux/Config/Api';
import { formatTime } from 'Routes/Utils/Date.Utils';
import { extendedOnQueryStartedWithNotifications } from 'Utils/Slices/ExtendedOnQueryStarted';
import type { IGetAllTeachersResponse, IGetAllTeachersQueryParams } from 'Contract/Slices/Community/Community';
import type {
  ITransformedGetAllEventsResponse,
  IGetAllEventsResponse,
  ICreateEventResponse,
  ICreateEventRequest,
  IUpdateEventResponse,
  IUpdateEventRequest,
  IDeleteEventResponse,
  IDeleteEventRequest,
} from 'Contract/Slices/Community/Events.Interfaces';

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

    getAllEvents: builder.query<ITransformedGetAllEventsResponse[], void>({
      query: () => ({
        url: '/api/community/events',
      }),
      transformResponse: (response: IGetAllEventsResponse[]) =>
        response.map(event => {
          const startDate = new Date(event.startDate);
          const endDate = new Date(event.endDate);

          return {
            ...event,
            startTime: formatTime(startDate),
            endTime: formatTime(endDate),
          };
        }),
      providesTags: ['eventsGet'],
    }),

    createEvent: builder.mutation<ICreateEventResponse, ICreateEventRequest>({
      query: newEvent => {
        return {
          url: '/api/community/events',
          method: 'POST',
          body: newEvent,
        };
      },
      invalidatesTags: ['eventsGet'],
    }),

    updateEvent: builder.mutation<IUpdateEventResponse, IUpdateEventRequest>({
      query: updatedEvent => ({
        url: `/api/community/events/${updatedEvent.id}`,
        method: 'PUT',
        body: updatedEvent,
      }),
      invalidatesTags: ['eventsGet'],
    }),

    deleteEvent: builder.mutation<IDeleteEventResponse, IDeleteEventRequest>({
      query: ({ id }) => ({
        url: `/api/community/events/${id}`,
        method: 'DELETE',
      }),
      onQueryStarted: extendedOnQueryStartedWithNotifications({
        successMessage: 'Deleted event',
        successCallback: (_data, _dispatch) => {},
      }),

      invalidatesTags: ['eventsGet'],
    }),
  }),
});

export const {
  useGetAllTeachersQuery,
  useGetAllEventsQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = communitySlice;
