import React from 'react';
import { TextField, MenuItem, IconButton, InputAdornment } from '@mui/material';
import { FieldValues, FieldPath, Control, useController } from 'react-hook-form';
import ClearIcon from '@mui/icons-material/Clear';

interface FormInputProps<T extends FieldValues> extends React.ComponentProps<typeof TextField> {
  label: string;
  name: FieldPath<T>;
  control: Control<T>;
  rules?: Record<string, unknown>;
  select?: boolean; // Updated to use "select" prop directly
  options?: { label: string; value: string | number }[];
}

const FormInput = <T extends FieldValues>({ label, name, control, rules, select, options, ...rest }: FormInputProps<T>) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });

  const handleClear = () => {
    field.onChange('');
  };

  if (select) {
    return (
      <TextField
        select
        label={label}
        error={fieldState.invalid}
        helperText={fieldState.error?.type}
        SelectProps={{
          sx: {
            '& .MuiSelect-icon': {
              display: field.value ? 'none' : 'inline',
            },
          },
          endAdornment: (
            <InputAdornment position="end">
              {field.value && (
                <IconButton onClick={handleClear} edge="end">
                  <ClearIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
        {...field}
        {...rest}
      >
        {options?.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }

  return <TextField error={fieldState.invalid} helperText={fieldState.error?.type} label={label} {...field} {...rest} />;
};

export default FormInput;
