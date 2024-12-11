import { useMemo, useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import EventContent from 'components/viewsComponents/events/elements/EventContent';
import EventShowDialog from 'components/viewsComponents/events/elements/EventShowDialog';
import { useDialog } from 'contexts/dialogs/Dialogs.Context';
import { staticEvents } from './constants/EventsData';
import type { EventClickArg, EventContentArg } from '@fullcalendar/core/index.js';
import './styles/styles.scss';

const renderContent = (eventInfo: EventContentArg) => {
  return <EventContent eventInfo={eventInfo} />;
};

function Events() {
  const { enqueueDialog } = useDialog();
  const events = useMemo(() => staticEvents, []);
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const [view, setView] = useState(isSmallScreen ? 'dayGridDay' : 'dayGridMonth');
  const [headerToolbar, setHeaderToolbar] = useState({ center: '', left: '', right: '' });

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

  useEffect(() => {
    if (isSmallScreen) {
      setView('dayGridDay');
      setHeaderToolbar({ center: 'title', left: 'prev', right: 'next' });
      return;
    }

    setView('dayGridMonth');
    setHeaderToolbar({ center: 'title', left: 'dayGridMonth dayGridYear', right: 'prev today next' });
  }, [isSmallScreen]);

  return (
    <Box sx={{ position: 'relative', height: 'calc(100vh - 180px)' }}>
      <FullCalendar
        key={view}
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
        initialView={view}
        locale="eng"
        height="100%"
        scrollTime="08:00"
        slotMinTime="06:00"
        slotMaxTime="24:00"
        slotDuration="00:30"
        slotLabelInterval="02:00"
        eventContent={renderContent}
        eventClick={handleEventClick}
        titleFormat={{ year: 'numeric', month: 'short', day: '2-digit' }}
        events={events}
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          meridiem: 'narrow',
        }}
        headerToolbar={headerToolbar}
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
