import React from 'react';
import { useFormContext, Controller, get, type FieldError } from 'react-hook-form';
import { TextField } from '@mui/material';

const DescriptionField: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, 'description') as FieldError | undefined;

  return (
    <Controller
      name="description"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Description"
          margin="dense"
          multiline
          rows={3}
          error={Boolean(error)}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default DescriptionField;
