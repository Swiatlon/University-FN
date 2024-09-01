import React from 'react';
import { Select, MenuItem, type SelectChangeEvent } from '@mui/material';
import { beautifyNumbers } from 'Routes/Utils/Decorators';

interface IPageSizeSelectProps {
  value: number;
  onChange: (event: SelectChangeEvent<number>) => void;
  disabled?: boolean;
}

const pageSizeOptions = [500, 1000, 10000, 100000];

const PageSizeSelect: React.FC<IPageSizeSelectProps> = ({ value, onChange, disabled }) => {
  return (
    <Select value={value} onChange={onChange} variant="standard" disabled={disabled}>
      {pageSizeOptions.map(size => (
        <MenuItem key={size} value={size}>
          {beautifyNumbers(size)}
        </MenuItem>
      ))}
    </Select>
  );
};

export default PageSizeSelect;
