import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { type Control, type FieldPath, type FieldValues, useController } from 'react-hook-form';

interface FormDatePickerProps<T extends FieldValues> extends React.ComponentProps<typeof DatePicker> {
  label: string;
  name: FieldPath<T>;
  control: Control<T>;
  rules?: Record<string, unknown>;
}

function FormDatePicker<T extends FieldValues>({ label, name, control, rules, slotProps, ...rest }: FormDatePickerProps<T>) {
  const { field, fieldState } = useController({
    control,
    name,
    rules,
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        slotProps={{
          ...slotProps,
          textField: {
            ...slotProps?.textField,
            error: fieldState.invalid,
            helperText: fieldState.error?.type,
          },
        }}
        {...field}
        {...rest}
      />
    </LocalizationProvider>
  );
}

export default FormDatePicker;
