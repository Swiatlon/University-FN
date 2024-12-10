import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox, FormControlLabel, type FormControlLabelProps } from '@mui/material';

interface RHFCheckboxProps extends Omit<FormControlLabelProps, 'control' | 'name'> {
  name: string;
}

const RHFCheckbox = ({ name, label, ...otherProps }: RHFCheckboxProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<Checkbox {...field} checked={field.value as boolean} />}
          label={label}
          {...otherProps}
        />
      )}
    />
  );
};

export default RHFCheckbox;
