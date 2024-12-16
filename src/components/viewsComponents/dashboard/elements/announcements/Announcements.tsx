import EventIcon from '@mui/icons-material/Event';
import { Typography, List, ListItem, Paper, Box } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { announcementsData } from '../../constants/AnnouncementsData';

const Announcements = () => {
  const announcements = announcementsData;

  return (
    <Paper className="PaperContainer">
      <Typography variant="h5" className="Title" gutterBottom>
        Latest Messages from Administration
      </Typography>
      <List>
        {announcements.map(({ id, title, body, date }) => (
          <ListItem key={id} className="ListItem" sx={{ gap: 1 }}>
            <Typography variant="subtitle1" component="div" className="Title">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: '#555' }} component="div">
              {body}
            </Typography>
            <Box className="ItemBox">
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
