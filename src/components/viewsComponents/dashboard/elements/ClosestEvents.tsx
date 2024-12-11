import { useNavigate } from 'react-router-dom';
import EventIcon from '@mui/icons-material/Event';
import { Typography, List, ListItem, Paper, Box } from '@mui/material';
import { IEvent } from 'components/viewsComponents/events/constants/EventsData';
import { format, parseISO } from 'date-fns';
import '../styles/ElementsStyles.scss';

interface ClosestEventsProps {
  closestEvents: IEvent[];
}
const ClosestEvents = ({ closestEvents }: ClosestEventsProps) => {
  const navigate = useNavigate();

  const formatStartDate = (start: string): string => format(parseISO(start), 'MM/dd/yyyy');

  const handleNavigate = () => {
    navigate(`community/events`);
  };

  return (
    <Paper
      className="paper-container"
      sx={{
        flex: 1,
        flexGrow: 7,
        flexBasis: '300px',
        display: 'flex',
      }}
    >
      <Typography variant="h5" className="title">
        Closest Upcoming Events
      </Typography>
      <List>
        {closestEvents.map(({ id, title, start }) => (
          <ListItem key={id} onClick={handleNavigate} className="list-item">
            <Typography variant="subtitle1" component="div" className="title">
              {title}
            </Typography>
            <Box className="item-box">
              <EventIcon fontSize="small" />
              <Typography variant="caption" component="span">
                {formatStartDate(start)}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ClosestEvents;
