import React from 'react';
import { Box } from '@mui/material';
import RHFTextField from '../../textField/RHFTextField';
import type { IWithTimeProps } from '../types/RHFDateRangePicker.Types';

interface IProps {
  withTime: IWithTimeProps;
}

const DateRangePickerTimeChoosingFooter: React.FC<IProps> = ({ withTime }) => {
  return (
    <Box className="DateRangePickerTimeChoosingFooter">
      <RHFTextField
        name={withTime.startTimeName}
        label="Start Time"
        type="time"
        InputLabelProps={{ shrink: true }}
        shouldValidate={false}
      />
      <RHFTextField
        name={withTime.endTimeName}
        label="End Time"
        type="time"
        InputLabelProps={{ shrink: true }}
        shouldValidate={false}
      />
    </Box>
  );
};

export default DateRangePickerTimeChoosingFooter;
