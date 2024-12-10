import { useFormContext, Controller, get, type FieldError } from 'react-hook-form';
import { TextField } from '@mui/material';

const TitleField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, 'title') as FieldError | undefined;

  return (
    <Controller
      name="title"
      control={control}
      render={({ field }) => (
        <TextField {...field} label="Title" margin="dense" error={Boolean(error)} helperText={error?.message} />
      )}
    />
  );
};

export default TitleField;
