import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FieldPath, FieldValues, Control, useController } from 'react-hook-form';

interface FormDatePickerProps<T extends FieldValues> extends React.ComponentProps<typeof DatePicker> {
  label: string;
  name: FieldPath<T>;
  control: Control<T>;
  rules?: Record<string, unknown>;
}

const FormDatePicker = <T extends FieldValues>({ label, name, control, rules, slotProps, ...rest }: FormDatePickerProps<T>) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...field}
        label={label}
        slotProps={{
          ...slotProps,
          textField: {
            ...slotProps?.textField,
            error: fieldState.invalid,
            helperText: fieldState.error?.type,
          },
        }}
        {...rest}
      />
    </LocalizationProvider>
  );
};

export default FormDatePicker;
