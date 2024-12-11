import * as Yup from 'yup';

const organizatorSchema = Yup.object().shape({
  organizerId: Yup.number().required('Organizer ID is required'),
  organizerType: Yup.string()
    .oneOf(['COMPANY', 'INDIVIDUAL'], 'Invalid organizer type')
    .required('Organizer type is required'),
  name: Yup.string().required('Organizer name is required'),
});

export const eventValidationSchema = Yup.object().shape({
  title: Yup.string().required('Event title is required'),
  description: Yup.string().required('Description is required'),
  organizators: Yup.array().of(organizatorSchema).default([]),
  author: Yup.string().required(),
  dateRange: Yup.object().shape({
    startDate: Yup.date().nullable().required('Start date is required'),
    endDate: Yup.date().nullable().required('End date is required'),
  }),
  startTime: Yup.string().nullable().required('Start time is required'),
  endTime: Yup.string().nullable().required('End time is required'),
});

export type EventFormValuesType = Yup.InferType<typeof eventValidationSchema>;
