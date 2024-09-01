import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFDateRangePicker from 'components/shared/formComponents/dateRangePicker/RHFDateRangePicker';
import RHFTextField from 'components/shared/formComponents/textField/RHFTextField';
import { useUpdateEventMutation } from 'redux/apiSlices/community/Community.Api.Slice';
import { eventValidationSchema, type EventFormValuesType } from '../EventManageDialog.Yup';
import type { IEventUpdateDialog } from 'types/events/Events.Interfaces';

const EventUpdateDialog: React.FC<IEventUpdateDialog> = ({
  onClose,
  eventID,
  initialTitle,
  initialDescription,
  initialStartDate,
  initialEndDate,
  initialStartTime,
  initialEndTime,
}) => {
  const [updateEvent] = useUpdateEventMutation();
  const methods = useForm<EventFormValuesType>({
    resolver: yupResolver(eventValidationSchema),
    defaultValues: {
      title: initialTitle,
      description: initialDescription,
      dateRange: { startDate: initialStartDate, endDate: initialEndDate },
      startTime: initialStartTime,
      endTime: initialEndTime,
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: EventFormValuesType) => {
    const {
      title,
      description,
      dateRange: { startDate, endDate },
    } = data;

    updateEvent({ id: eventID, title, description, startDate, endDate, organizators: [] });
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <Dialog open onClose={onClose}>
        <DialogTitle>Update Event</DialogTitle>
        <DialogContent>
          <RHFTextField name="title" label="Event Title" fullWidth margin="normal" />
          <RHFTextField name="description" label="Description" fullWidth margin="normal" multiline rows={4} />
          <RHFDateRangePicker
            name="dateRange"
            withTime={{
              startTimeName: 'startTime',
              endTimeName: 'endTime',
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </FormProvider>
  );
};

export default EventUpdateDialog;
