import type { ReactElement } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Divider } from '@mui/material';
import { useDialog } from 'Contexts/Dialogs/Dialogs.Context';
import { useDeleteEventMutation } from 'Redux/ApiSlices/Community/Community.Api.Slice';
import { formatFullDateTime } from 'Routes/Utils/Date.Utils';
import EventUpdateDialog from '../EventUpdateDialog/EventUpdateDialog';
import type { IEventShowDialog } from 'Types/Events/Events.Interfaces';

const EventShowDialog = ({ onClose, event }: IEventShowDialog): ReactElement => {
  const [deleteEvent] = useDeleteEventMutation();
  const { enqueueDialog } = useDialog();

  const handleUpdateClick = () => {
    onClose();
    enqueueDialog(props => (
      <EventUpdateDialog
        {...props}
        eventID={event.id}
        initialTitle={event.title}
        initialDescription={event.description}
        initialStartDate={event.startDate!}
        initialEndDate={event.endDate!}
        initialStartTime={event.startTime}
        initialEndTime={event.endTime}
      />
    ));
  };

  const handleDeleteClick = async () => {
    onClose();
    await deleteEvent({ id: event.id });
  };

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
        <Button onClick={handleDeleteClick} variant="contained" color="error">
          Delete
        </Button>
        <Button onClick={handleUpdateClick} variant="contained" color="secondary">
          Update
        </Button>
        <Button onClick={onClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventShowDialog;
