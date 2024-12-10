import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import EventIcon from '@mui/icons-material/Event';
import { Typography, List, ListItem, Paper, Box } from '@mui/material';
import { staticEvents } from 'components/viewsComponents/events/constants/EventsData';

const ClosestEvents = () => {
  const now = new Date();
  const navigate = useNavigate();

  const closestEvents = useMemo(() => {
    return staticEvents
      .filter(event => {
        const startDate = new Date(event.start);
        const endDate = new Date(event.end);

        return startDate >= now || (startDate <= now && endDate >= now);
      })
      .sort((a, b) => {
        const dateA = new Date(a.start).getTime();
        const dateB = new Date(b.start).getTime();
        return dateA - dateB;
      })
      .slice(0, 3);
  }, [now]);

  const formatStartDate = (start: string): string => {
    const startDate = new Date(start);

    return startDate.toLocaleDateString();
  };

  const handleNavigate = () => {
    navigate(`community/events`);
  };

  return (
    <Paper
      sx={{
        flex: 1,
        flexGrow: 7,
        flexBasis: '300px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: 2,
      }}
    >
      <Typography variant="h5" color="#524e61" fontWeight="bold">
        Closest Upcoming Events
      </Typography>
      <List>
        {closestEvents.map(event => (
          <ListItem
            key={event.id}
            onClick={handleNavigate}
            sx={{
              borderBottom: '1px solid #ddd',
              paddingLeft: 0,
              alignItems: 'flex-start',
              cursor: 'pointer',

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
                {formatStartDate(event.start)}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ClosestEvents;
