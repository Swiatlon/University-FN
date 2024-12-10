import { Controller, useFormContext } from 'react-hook-form';
import { TextField, type TextFieldProps } from '@mui/material';

interface RHFTextFieldProps extends Omit<TextFieldProps, 'name'> {
  name: string;
  shouldValidate?: boolean;
}

const RHFTextField = ({ name, shouldValidate = true, ...otherProps }: RHFTextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <TextField
            {...field}
            {...otherProps}
            error={shouldValidate ? Boolean(error) : undefined}
            helperText={shouldValidate && error ? error.message : undefined}
          />
        );
      }}
    />
  );
};

export default RHFTextField;
