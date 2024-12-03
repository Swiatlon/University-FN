import * as yup from 'yup';

export interface ICreateTodoFormData {
  title: string;
  description: string;
  endDate: Date;
  color: string;
}

export const schema = yup
  .object({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    endDate: yup
      .date()
      .required('End date is required')
      .typeError('End date is required')
      .min(
        (() => {
          const now = new Date();
          now.setHours(0, 0, 0, 0);
          return now;
        })(),
        'End date must be equal today or later'
      ),
    color: yup.string().required('Color is required'),
  })
  .required();
