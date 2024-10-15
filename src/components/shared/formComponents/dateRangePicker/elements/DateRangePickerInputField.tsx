import { forwardRef } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { IconButton, InputAdornment, TextField, Typography, Stack } from '@mui/material';
import { formattedDateRange } from '../utils/RHFDateRangePicker.Utils';
import type { IDateRangePickerCustomInputProps } from '../types/RHFDateRangePicker.Types';

const DateRangePickerCustomInput = forwardRef<HTMLInputElement, IDateRangePickerCustomInputProps>(
  ({ startDate, endDate, label, errorMessages, onClear, onClick }, ref) => {
    return (
      <TextField
        ref={ref}
        label={label ?? 'Date Range'}
        variant="outlined"
        value={formattedDateRange(startDate, endDate)}
        margin="normal"
        fullWidth
        error={Boolean(errorMessages.length)}
        onClick={onClick}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DateRangeIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={onClear} edge="end">
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        helperText={
          errorMessages.length > 0 ? (
            <Stack spacing={0.5}>
              {errorMessages.map(error => (
                <Typography key={error} variant="caption" color="error">
                  {error}
                </Typography>
              ))}
            </Stack>
          ) : null
        }
      />
    );
  }
);

DateRangePickerCustomInput.displayName = 'DateRangePickerCustomInput';

export default DateRangePickerCustomInput;
