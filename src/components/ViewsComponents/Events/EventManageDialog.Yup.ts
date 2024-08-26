import * as Yup from 'yup';

export const eventValidationSchema = Yup.object().shape({
  title: Yup.string().required('Event title is required'),
  description: Yup.string().required('Description is required'),
  dateRange: Yup.object().shape({
    startDate: Yup.date().nullable().required('Start date is required'),
    endDate: Yup.date().nullable().required('End date is required'),
  }),
  startTime: Yup.string().nullable().required('Start time is required'),
  endTime: Yup.string().nullable().required('End time is required'),
});

export type EventFormValuesType = Yup.InferType<typeof eventValidationSchema>;
