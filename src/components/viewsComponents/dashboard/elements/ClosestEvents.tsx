import React from 'react';
import EventIcon from '@mui/icons-material/Event';
import { Typography, List, ListItem, Paper, Box } from '@mui/material';

const calculateFutureDate = (daysToAdd: number): Date => {
  const today = new Date();
  today.setDate(today.getDate() + daysToAdd);
  return today;
};

const events = [
  { id: 1, title: 'Orientation Day', date: calculateFutureDate(2) },
  { id: 2, title: 'Midterm Exams', date: calculateFutureDate(30) },
  { id: 3, title: 'Career Fair', date: calculateFutureDate(50) },
];

const ClosestEvents: React.FC = () => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: 2,
        width: 'fit-content',
        minHeight: '289px',
      }}
    >
      <Typography variant="h5" color="#524e61" fontWeight="bold">
        Closest Upcoming Events
      </Typography>
      <List>
        {events.map(event => (
          <ListItem
            key={event.id}
            sx={{
              borderBottom: '1px solid #ddd',
              paddingLeft: 0,
              alignItems: 'flex-start',
              ':last-child': {
                borderBottom: 'none',
              },
              flexDirection: 'column',
            }}
          >
            <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
              {event.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: '#888',
              }}
            >
              <EventIcon fontSize="small" />
              <Typography variant="caption" component="span">
                {new Date(event.date).toLocaleDateString()}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ClosestEvents;
