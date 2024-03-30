import React from 'react';
import { IconButton, InputAdornment, MenuItem, TextField } from '@mui/material';
import { useController, type Control, type FieldPath, type FieldValues } from 'react-hook-form';
import ClearIcon from '@mui/icons-material/Clear';

interface FormInputProps<T extends FieldValues> extends React.ComponentProps<typeof TextField> {
  readonly label: string;
  readonly name: FieldPath<T>;
  readonly control: Control<T>;
  readonly rules?: Record<string, unknown>;
  readonly select?: boolean;
  readonly options?: { label: string; value: boolean | number | string }[];
}

function FormInput<T extends FieldValues>({ label, name, control, rules, select, options, ...rest }: FormInputProps<T>) {
  const { field, fieldState } = useController({
      control,
      name,
      rules,
    }),
    handleClear = () => {
      field.onChange('');
    };

  if (select === true) {
    return (
      <TextField
        SelectProps={{
          endAdornment: (
            <InputAdornment position="end">
              {field.value ? (
                <IconButton edge="end" onClick={handleClear}>
                  <ClearIcon />
                </IconButton>
              ) : null}
            </InputAdornment>
          ),
          sx: {
            '& .MuiSelect-icon': {
              display: field.value ? 'none' : 'inline',
            },
          },
        }}
        error={fieldState.invalid}
        helperText={fieldState.error?.type}
        label={label}
        select
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
}

export default FormInput;
