import EventIcon from '@mui/icons-material/Event';
import { Typography, List, ListItem, Paper, Box } from '@mui/material';

interface IMessage {
  id: number;
  title: string;
  body: string;
  date: string;
}

const messages: IMessage[] = [
  {
    id: 1,
    title: 'Welcome to the Semester!',
    body: 'We hope you have a great start to the semester. Remember to check your schedules and prepare for the first week of classes.',
    date: '2024-01-15',
  },
  {
    id: 2,
    title: 'Library System Maintenance',
    body: 'The library system will be undergoing maintenance on January 20th from 8 PM to 12 AM. Please plan accordingly.',
    date: '2024-01-18',
  },
  {
    id: 3,
    title: 'Course Enrollment Deadline',
    body: 'The last date to add or drop courses for this semester is January 25th. Make sure to finalize your schedules.',
    date: '2024-01-22',
  },
];

const Messages = () => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignContent: 'center',
        p: 4,
      }}
    >
      <Typography variant="h5" color="#524e61" fontWeight="bold" gutterBottom>
        Latest Messages from Administration
      </Typography>
      <List>
        {messages.map(message => (
          <ListItem
            key={message.id}
            sx={{
              borderBottom: '1px solid #ddd',
              paddingLeft: 0,
              alignItems: 'flex-start',
              ':last-child': {
                borderBottom: 'none',
              },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
              {message.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: '#555' }} component="div">
              {message.body}
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
                {new Date(message.date).toLocaleDateString()}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Messages;
