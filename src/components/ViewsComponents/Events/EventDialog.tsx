import React, { type ReactElement } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Divider } from '@mui/material';

interface EventDialogProps {
  onClose: () => void;
  event: {
    title: string;
    startDate: Date | null;
    endDate: Date | null;
    description: string;
  };
}

const EventDialog = ({ onClose, event }: EventDialogProps): ReactElement => {
  const formatDate = (date: Date | null) => {
    if (!date) return '';

    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <Dialog open onClose={onClose} fullWidth>
      <DialogTitle>{event.title}</DialogTitle>
      <DialogContent sx={{ pl: 4, mt: 3, display: 'grid', gap: 2 }}>
        <Box>
          <Typography variant="subtitle2" color="textSecondary">
            Start Date
          </Typography>
          <Typography variant="body1">{formatDate(event.startDate)}</Typography>
        </Box>
        <Divider />
        <Box>
          <Typography variant="subtitle2" color="textSecondary">
            End Date
          </Typography>
          <Typography variant="body1">{formatDate(event.endDate)}</Typography>
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

export default EventDialog;
