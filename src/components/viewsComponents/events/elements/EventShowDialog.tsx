import type { ReactElement } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Divider } from '@mui/material';
import { formatFullDateTime } from 'utils/Date.Utils';

interface IEventShowDialog {
  onClose: () => void;
  event: {
    id: string;
    title: string;
    startDate: Date | null;
    endDate: Date | null;
    description: string;
    startTime: string;
    endTime: string;
  };
}
const EventShowDialog = ({
  onClose,
  event: { title, startDate, endDate, description },
}: IEventShowDialog): ReactElement => {
  return (
    <Dialog open onClose={onClose} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ pl: 4, mt: 3, display: 'grid', gap: 2 }}>
        <Box>
          <Typography variant="subtitle2" color="textSecondary">
            Start Date
          </Typography>
          <Typography variant="body1">{formatFullDateTime(startDate)}</Typography>
        </Box>
        <Divider />
        <Box>
          <Typography variant="subtitle2" color="textSecondary">
            End Date
          </Typography>
          <Typography variant="body1">{formatFullDateTime(endDate)}</Typography>
        </Box>
        <Divider />
        <Box>
          <Typography variant="subtitle2" color="textSecondary">
            Description
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            {description || 'No description provided.'}
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
