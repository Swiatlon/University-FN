import Api from 'redux/config/Api';
import { formatTime } from 'utils/general/Date.Utils';
import { extendedOnQueryStartedWithNotifications } from 'utils/slices/ExtendedOnQueryStarted';
import type {
  IGetAllTeachersResponse,
  IGetAllTeachersQueryParams,
  IGetAllEventOrganizersResponse,
  ITransformedGetAllEventOrganizersResponse,
} from 'contract/slices/community/Community';
import type {
  ITransformedGetAllEventsResponse,
  IGetAllEventsResponse,
  ICreateEventResponse,
  ICreateEventRequest,
  IUpdateEventResponse,
  IUpdateEventRequest,
  IDeleteEventResponse,
  IDeleteEventRequest,
} from 'contract/slices/community/Events.Interfaces';

export const communitySlice = Api.injectEndpoints({
  endpoints: builder => ({
    getAllTeachers: builder.query<IGetAllTeachersResponse, IGetAllTeachersQueryParams>({
      query: ({ pagination, selectFields, search }) => {
        return {
          url: '/community/getAllTeachers',
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

    getAllEventOrganizers: builder.query<ITransformedGetAllEventOrganizersResponse[], void>({
      query: () => ({
        url: '/api/community/eventOrganizers',
      }),
      transformResponse: (response: IGetAllEventOrganizersResponse[]) =>
        response.map(organizer => {
          return {
            organizerId: organizer.organizerId,
            organizerType: organizer.organizerType,
            name: organizer.surname ? `${organizer.name} ${organizer.surname}` : organizer.name,
          };
        }),
    }),
  }),
});

export const {
  useGetAllTeachersQuery,
  useGetAllEventsQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
  useGetAllEventOrganizersQuery,
} = communitySlice;
