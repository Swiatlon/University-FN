import React from 'react';
import { TextField, FormControl, Select, MenuItem } from '@mui/material';
import { FieldValues, FieldPath, Control, useController } from 'react-hook-form';

interface FormInputProps<T extends FieldValues> extends React.ComponentProps<typeof TextField> {
  label: string;
  name: FieldPath<T>;
  control: Control<T>;
  rules?: Record<string, unknown>;
  isSelect?: boolean;
  options?: { label: string; value: string | number }[];
}

const FormInput = <T extends FieldValues>({ label, name, control, rules, isSelect, options, ...rest }: FormInputProps<T>) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });

  if (isSelect) {
    return (
      <FormControl {...rest}>
        <Select label={label} {...field}>
          {options?.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  return <TextField error={fieldState.invalid} helperText={fieldState.error?.type} label={label} {...field} {...rest} />;
};

export default FormInput;
