import { useMemo } from 'react';
import { Box } from '@mui/material';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { type DateClickArg } from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useDialog } from 'Contexts/Dialogs/Dialogs.Context';
import { useGetAllEventsQuery } from 'Redux/ApiSlices/Community/Community.Api.Slice';
import CenteredLoader from 'Components/Shared/CenteredLoader/CenteredLoader';
import EventContent from 'Components/ViewsComponents/Events/EventContent';
import EventCreateDialog from 'Components/ViewsComponents/Events/EventCreate/EventCreateDialog';
import EventDialog from 'Components/ViewsComponents/Events/EventDialog';
import type { EventClickArg, EventApi, EventContentArg } from '@fullcalendar/core/index.js';

const renderContent = (eventInfo: EventContentArg) => {
  return <EventContent eventInfo={eventInfo} />;
};

function Events() {
  const { data, isFetching } = useGetAllEventsQuery();
  const { enqueueDialog } = useDialog();

  const events = useMemo(() => {
    return (
      data?.map(event => ({
        id: event.id.toString(),
        title: event.title,
        start: event.startDate,
        end: event.endDate,
        description: event.description,
      })) ?? []
    );
  }, [data]);

  const handleEventClick = (clickInfo: EventClickArg) => {
    const event: EventApi = clickInfo.event;

    enqueueDialog(props => (
      <EventDialog
        {...props}
        event={{
          title: event.title,
          startDate: event.start,
          endDate: event.end,
          description: event.extendedProps['description'] as string,
        }}
      />
    ));
  };

  const handleDateClick = (arg: DateClickArg) => {
    enqueueDialog(props => <EventCreateDialog initialStartDate={arg.date} {...props} />);
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
        initialView="timeGridWeek"
        locale="pl"
        height="100%"
        scrollTime="08:00"
        slotMinTime="06:00"
        slotMaxTime="24:01"
        slotDuration="00:30"
        slotLabelInterval="02:00"
        eventContent={renderContent}
        eventClick={handleEventClick}
        dateClick={handleDateClick}
        titleFormat={{ year: 'numeric', month: 'short', day: '2-digit' }}
        events={events}
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          meridiem: 'short',
        }}
        headerToolbar={{
          center: 'title',
          left: 'timeGridDay dayGridWeek dayGridMonth dayGridYear',
          right: 'addNewEvent',
        }}
        footerToolbar={{
          left: '',
          center: '',
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
