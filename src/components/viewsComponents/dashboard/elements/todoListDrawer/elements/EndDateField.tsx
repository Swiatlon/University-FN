import { useFormContext, Controller, get, type FieldError } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const EndDateField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, 'endDate') as FieldError | undefined;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name="endDate"
        control={control}
        render={({ field }) => (
          <DatePicker
            {...field}
            label="End Date"
            format="dd/MM/yyyy"
            minDate={new Date()}
            slotProps={{
              textField: {
                error: Boolean(error),
                helperText: error?.message,
              },
            }}
            onChange={date => {
              field.onChange(date);
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default EndDateField;
