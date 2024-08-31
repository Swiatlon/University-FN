/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, useFormContext } from 'react-hook-form';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Checkbox, Autocomplete, CircularProgress, TextField } from '@mui/material';
import type { IRHFAutocompleteWithTagsProps } from './Types/RHFAutoComplete.Types';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const RHFAutocompleteWithTags = <T,>({
  baseProps: { name },
  inputProps: { shouldValidate = true, ...otherInputProps },
  autocompleteProps: {
    options,
    getOptionLabel,
    groupBy,
    loading = false,
    multiple = true,
    renderTags,
    defaultValue,
    ...otherAutocompleteProps
  },
}: IRHFAutocompleteWithTagsProps<T>) => {
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
          disableCloseOnSelect
          multiple={multiple}
          options={sortOptions()}
          groupBy={groupBy}
          getOptionLabel={handleGetOptionLabel}
          disabled={loading || otherAutocompleteProps.disabled}
          onChange={(_event, value) => {
            field.onChange(value);
          }}
          value={field.value as T[]}
          renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props as { key?: React.Key } & React.LiHTMLAttributes<HTMLLIElement>;
            return (
              <li {...optionProps} key={key}>
                <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} sx={{ mr: 1 }} />
                {handleGetOptionLabel(option)}
              </li>
            );
          }}
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

export default RHFAutocompleteWithTags;
