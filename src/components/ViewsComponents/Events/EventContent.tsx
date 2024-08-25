/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React from 'react';
import { Box, Typography } from '@mui/material';
import type { EventContentArg } from '@fullcalendar/core/index.js';

interface IEventContentProps {
  eventInfo: EventContentArg;
}

const EventContent: React.FC<IEventContentProps> = ({ eventInfo }) => {
  const startTime = eventInfo.event.start?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const endTime = eventInfo.event.end?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const isBlockEvent =
    eventInfo.event.allDay ||
    (eventInfo.event.start &&
      eventInfo.event.end &&
      eventInfo.event.start.toDateString() !== eventInfo.event.end.toDateString());
  const isTimeBasedView = ['timeGridDay', 'timeGridWeek', 'timeline'].includes(eventInfo.view.type);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 1, flexWrap: 'wrap', minWidth: '100px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            width: 8,
            height: 8,
            bgcolor: isBlockEvent || isTimeBasedView ? '#fff' : eventInfo.backgroundColor,
            borderRadius: '50%',
            mr: 1,
          }}
        />
        {eventInfo.event.allDay ? (
          <Typography variant="body2" sx={{ fontSize: '13px', whiteSpace: 'nowrap' }}>
            All day
          </Typography>
        ) : (
          <Typography variant="body2" sx={{ fontSize: '13px', whiteSpace: 'nowrap' }}>
            {`${startTime} - ${endTime}`}
          </Typography>
        )}
      </Box>
      <Box sx={{ fontSize: '13px', whiteSpace: 'normal', textOverflow: 'ellipsis', ml: 1 }}>
        <strong>{eventInfo.event.title}</strong>
      </Box>
    </Box>
  );
};

export default EventContent;
