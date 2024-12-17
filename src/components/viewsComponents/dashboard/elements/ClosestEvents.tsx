import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import EventIcon from '@mui/icons-material/Event';
import { Typography, List, ListItem, Paper, Box } from '@mui/material';
import { staticEvents } from 'components/viewsComponents/events/constants/EventsData';
import '../styles/ElementsStyles.scss';
import { format } from 'date-fns';
import { getClosestEvents } from '../utils/EventsHelpers';

const ClosestEvents = () => {
  const navigate = useNavigate();

  const closestEvents = useMemo(() => {
    return getClosestEvents(staticEvents);
  }, [staticEvents]);

  const handleNavigate = () => {
    navigate(`community/events`);
  };

  return (
    <Paper
      className="PaperContainer"
      sx={{
        flex: 1,
        flexGrow: 7,
        flexBasis: '300px',
        display: 'flex',
      }}
    >
      <Typography variant="h5" className="Title">
        Closest Upcoming Events
      </Typography>
      <List>
        {closestEvents.map(({ id, title, start }) => (
          <ListItem key={id} onClick={handleNavigate} className="ListItem">
            <Typography variant="subtitle1" className="Title">
              {title}
            </Typography>
            <Box className="ItemBox">
              <EventIcon fontSize="small" />
              <Typography variant="caption" component="span">
                {format(start, 'MM/dd/yyyy')}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ClosestEvents;
