import { useMemo } from 'react';
import { Box } from '@mui/material';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { type DateClickArg } from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import CenteredLoader from 'components/shared/centeredLoader/CenteredLoader';
import EventCreateDialog from 'components/viewsComponents/events/eventAddDialog/EventCreateDialog';
import EventContent from 'components/viewsComponents/events/eventContent/EventContent';
import EventShowDialog from 'components/viewsComponents/events/eventShowDialog/EventShowDialog';
import { useDialog } from 'contexts/dialogs/Dialogs.Context';
import { useGetAllEventsQuery } from 'redux/apiSlices/community/Community.Api.Slice';
import { useGetLoggedAccountBasicDataQuery } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import type { EventClickArg, EventContentArg, EventAddArg } from '@fullcalendar/core/index.js';

const renderContent = (eventInfo: EventContentArg) => {
  return <EventContent eventInfo={eventInfo} />;
};

function Events() {
  const { data, isFetching } = useGetAllEventsQuery();
  const { data: userData } = useGetLoggedAccountBasicDataQuery();
  const { enqueueDialog } = useDialog();

  const events = useMemo(() => {
    return (
      data?.map(event => {
        const startDate = new Date(event.startDate);
        const endDate = new Date(event.endDate);
        const isEndAtMidnight = event.endTime === '00:00';

        if (isEndAtMidnight) {
          endDate.setHours(24, 0, 0);
        }

        return {
          id: event.id.toString(),
          title: event.title,
          start: startDate.toISOString(),
          end: endDate.toISOString(),
          description: event.description,
          startDateTime: event.startTime,
          endDateTime: event.endTime,
          allDay: event.startTime === '00:00' && event.endTime === '00:00',
        };
      }) ?? []
    );
  }, [data]);

  const handleEventAddClick = (arg: EventAddArg) => {
    const startDate = arg.event.start!;

    if (userData?.organizer) {
      enqueueDialog(props => <EventCreateDialog {...props} initialStartDate={startDate} />);
    }
  };

  const handleDateClick = (arg: DateClickArg) => {
    const startDate = arg.date;

    if (userData?.organizer) {
      enqueueDialog(props => <EventCreateDialog {...props} initialStartDate={startDate} />);
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    const { event } = clickInfo;

    enqueueDialog(props => (
      <EventShowDialog
        {...props}
        event={{
          id: event.id,
          title: event.title,
          startDate: event.start!,
          endDate: event.end!,
          description: event.extendedProps['description'] as string,
          startTime: event.extendedProps['startDateTime'] as string,
          endTime: event.extendedProps['endDateTime'] as string,
        }}
      />
    ));
  };

  return (
    <Box sx={{ position: 'relative', height: 'calc(100vh - 180px)', minWidth: '800px' }}>
      {isFetching ? <CenteredLoader /> : null}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        expandRows
        nowIndicator
        displayEventEnd
        allDaySlot
        navLinks
        eventOverlap
        handleWindowResize
        fixedWeekCount={false}
        showNonCurrentDates={false}
        dayMaxEvents={6}
        eventMaxStack={6}
        eventDisplay="auto"
        timeZone="local"
        moreLinkClick="popover"
        initialView="dayGridMonth"
        locale="pl"
        height="100%"
        scrollTime="08:00"
        slotMinTime="06:00"
        slotMaxTime="24:00"
        slotDuration="00:30"
        slotLabelInterval="02:00"
        eventContent={renderContent}
        eventClick={handleEventClick}
        eventAdd={handleEventAddClick}
        dateClick={handleDateClick}
        titleFormat={{ year: 'numeric', month: 'short', day: '2-digit' }}
        events={events}
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          meridiem: 'narrow',
        }}
        headerToolbar={{
          center: 'title',
          left: 'dayGridMonth dayGridYear',
          right: 'prev today next',
        }}
        buttonText={{
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day',
          year: 'Year',
        }}
        customButtons={{
          addNewEvent: {
            text: 'Add New Event',
          },
        }}
        slotLabelFormat={{
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }}
      />
    </Box>
  );
}

export default Events;
