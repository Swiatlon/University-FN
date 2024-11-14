import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFAutocompleteWithTags from 'components/shared/formComponents/autocomplete/RHFAutoCompleteWithTags';
import RHFDateRangePicker from 'components/shared/formComponents/dateRangePicker/RHFDateRangePicker';
import RHFTextField from 'components/shared/formComponents/textField/RHFTextField';
import { stringify } from 'qs';
import { useGetAllEventOrganizersQuery, useCreateEventMutation } from 'redux/apiSlices/community/Community.Api.Slice';
import { useGetLoggedAccountBasicDataQuery } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import { eventValidationSchema, type EventFormValuesType } from '../EventManageDialog.Yup';
import type { IEventCreateDialog } from 'types/events/Events.Interfaces';

const EventCreateDialog: React.FC<IEventCreateDialog> = ({ onClose, initialStartDate }) => {
  const { data: eventOrganizers = [], isFetching } = useGetAllEventOrganizersQuery();
  const { data: userData } = useGetLoggedAccountBasicDataQuery();

  const [createEvent] = useCreateEventMutation();
  const methods = useForm<EventFormValuesType>({
    resolver: yupResolver(eventValidationSchema),
    defaultValues: {
      title: '',
      description: '',
      dateRange: { startDate: initialStartDate, endDate: undefined },
      organizators: [],
      startTime: '00:00',
      endTime: '00:00',
      author: userData!.organizer.id,
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: EventFormValuesType) => {
    const {
      title,
      description,
      dateRange: { startDate, endDate },
      organizators,
      author,
    } = data;

    createEvent({ title, description, startDate, endDate, organizators, author });
    onClose();
  };

  const handleClose = (_event: React.SyntheticEvent | Event, reason: string) => {
    if (reason === 'backdropClick') {
      return;
    }

    onClose();
  };

  return (
    <FormProvider {...methods}>
      <Dialog open onClose={handleClose}>
        <DialogTitle>Create New Event</DialogTitle>
        <DialogContent>
          <RHFTextField name="title" label="Event Title" fullWidth margin="normal" />
          <RHFTextField name="description" label="Description" fullWidth margin="normal" multiline rows={4} />
          <RHFAutocompleteWithTags
            baseProps={{ name: 'organizators' }}
            inputProps={{
              label: 'Select Organizers',
            }}
            autocompleteProps={{
              loading: isFetching,
              options: eventOrganizers,
              multiple: true,
              getOptionLabel: option => option.name,
              isOptionEqualToValue: (option, value) => option.organizerId === value.organizerId,
              getOptionKey: option => stringify(option),
              groupBy: option => option.organizerType,
              limitTags: 3,
            }}
          />
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

export default EventCreateDialog;
