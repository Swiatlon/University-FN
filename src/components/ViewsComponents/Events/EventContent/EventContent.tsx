import React from 'react';
import { Box, Typography } from '@mui/material';
import type { IEventContentProps } from 'Types/Events/Events.Interfaces';

const EventContent: React.FC<IEventContentProps> = ({ eventInfo }) => {
  const { start, end } = eventInfo.event;

  const startTime = start?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  let endTime = end?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (endTime === '00:00') {
    endTime = '24:00';
  }

  const isAllDay = eventInfo.event.allDay;

  const isBlockEvent = isAllDay;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 1,
        flexWrap: 'wrap',
        width: '100%',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            width: 8,
            height: 8,
            bgcolor: isBlockEvent ? '#fff' : '#1976d2',
            borderRadius: '50%',
            mr: 1,
          }}
        />
        <Typography variant="body2" sx={{ fontSize: '13px', whiteSpace: 'nowrap' }}>
          {`${startTime} - ${endTime}`}
        </Typography>
      </Box>
      <Box sx={{ fontSize: '13px', whiteSpace: 'normal', textOverflow: 'ellipsis', ml: 1 }}>
        <strong>{eventInfo.event.title}</strong>
      </Box>
    </Box>
  );
};

export default EventContent;
