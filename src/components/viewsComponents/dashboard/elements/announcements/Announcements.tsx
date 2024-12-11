import EventIcon from '@mui/icons-material/Event';
import { Typography, List, ListItem, Paper, Box } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { IAnnouncement } from './AnnouncementsData';

interface AnnouncementsProps {
  announcements: IAnnouncement[];
}
const Announcements = ({ announcements }: AnnouncementsProps) => {
  return (
    <Paper className="paper-container">
      <Typography variant="h5" className="title" gutterBottom>
        Latest Messages from Administration
      </Typography>
      <List>
        {announcements.map(({ id, title, body, date }) => (
          <ListItem key={id} className="list-item" sx={{ gap: 1 }}>
            <Typography variant="subtitle1" component="div" className="title">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: '#555' }} component="div">
              {body}
            </Typography>
            <Box className="item-box">
              <EventIcon fontSize="small" />
              <Typography variant="caption" component="span">
                {format(parseISO(date), 'MM/dd/yyyy')}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Announcements;
