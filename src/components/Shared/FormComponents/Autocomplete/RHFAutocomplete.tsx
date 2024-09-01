import { Controller, useFormContext } from 'react-hook-form';
import { Autocomplete, TextField, CircularProgress } from '@mui/material';
import type { IRHFAutocompleteWithoutTagsProps } from './Types/RHFAutoComplete.Types';

const RHFAutocomplete = <T,>({
  baseProps: { name },
  inputProps: { shouldValidate = true, ...otherInputProps },
  autocompleteProps: { options, getOptionLabel, groupBy, loading = false, ...otherAutocompleteProps },
}: IRHFAutocompleteWithoutTagsProps<T>) => {
  const { control } = useFormContext();

  const handleGetOptionLabel = (option: T | string): string => {
    if (typeof option === 'string') {
      return option;
    }

    return getOptionLabel ? getOptionLabel(option) : '';
  };

  const sortOptions = () => {
    if (!groupBy) return options;

    return options.slice().sort((a, b) => {
      const groupA = groupBy(a);
      const groupB = groupBy(b);

      if (groupA < groupB) return -1;
      if (groupA > groupB) return 1;

      return handleGetOptionLabel(a).localeCompare(handleGetOptionLabel(b));
    });
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...otherAutocompleteProps}
          options={sortOptions()}
          groupBy={groupBy}
          getOptionLabel={handleGetOptionLabel}
          disabled={loading}
          isOptionEqualToValue={(option, value) => handleGetOptionLabel(option) === handleGetOptionLabel(value)}
          onChange={(_event, value) => {
            field.onChange(value);
          }}
          value={(field.value as T) || null}
          renderInput={params => (
            <TextField
              {...params}
              {...otherInputProps}
              error={shouldValidate ? Boolean(error) : undefined}
              helperText={shouldValidate && error ? error.message : undefined}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      )}
    />
  );
};

export default RHFAutocomplete;
