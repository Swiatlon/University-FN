import type { AutocompleteProps, TextFieldProps } from '@mui/material';

export interface IBaseAutocompleteProps<T> {
  baseProps: {
    name: string;
  };
  inputProps: TextFieldProps & {
    shouldValidate?: boolean;
  };
  autocompleteProps: Omit<
    AutocompleteProps<T, boolean, boolean, boolean>,
    'renderInput' | 'onChange' | 'getOptionLabel'
  > & {
    options: T[];
    getOptionLabel?: (option: T) => string;
    groupBy?: (option: T) => string;
    loading?: boolean;
    multiple?: boolean;
  };
}

export interface IRHFAutocompleteWithoutTagsProps<T> extends IBaseAutocompleteProps<T> {
  autocompleteProps: Omit<IBaseAutocompleteProps<T>['autocompleteProps'], 'multiple'> & {
    multiple?: never;
  };
}

export interface IRHFAutocompleteWithTagsProps<T> extends IBaseAutocompleteProps<T> {
  autocompleteProps: Omit<IBaseAutocompleteProps<T>['autocompleteProps'], 'multiple'> & {
    multiple: true;
    renderTags?: never;
    defaultValues?: never;
  };
}
