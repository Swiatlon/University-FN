import type { ReactElement } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Divider } from '@mui/material';
import { formatFullDateTime } from 'utils/general/Date.Utils';
import type { IEventShowDialog } from 'types/events/Events.Interfaces';

const EventShowDialog = ({ onClose, event }: IEventShowDialog): ReactElement => {
  return (
    <Dialog open onClose={onClose} fullWidth>
      <DialogTitle>{event.title}</DialogTitle>
      <DialogContent sx={{ pl: 4, mt: 3, display: 'grid', gap: 2 }}>
        <Box>
          <Typography variant="subtitle2" color="textSecondary">
            Start Date
          </Typography>
          <Typography variant="body1">{formatFullDateTime(event.startDate)}</Typography>
        </Box>
        <Divider />
        <Box>
          <Typography variant="subtitle2" color="textSecondary">
            End Date
          </Typography>
          <Typography variant="body1">{formatFullDateTime(event.endDate)}</Typography>
        </Box>
        <Divider />
        <Box>
          <Typography variant="subtitle2" color="textSecondary">
            Description
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            {event.description || 'No description provided.'}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ padding: '1rem', justifyContent: 'flex-end' }}>
        <Button onClick={onClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventShowDialog;
