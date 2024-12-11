import { Select, MenuItem, type SelectChangeEvent } from '@mui/material';
import { beautifyNumbers } from 'utils/Decorators';

interface IPageSizeSelectProps {
  value: number;
  onChange: (event: SelectChangeEvent<number>) => void;
  disabled?: boolean;
}

const pageSizeOptions = [100, 500, 1000, 10000, 100000];

const PageSizeSelect = ({ value, onChange, disabled }: IPageSizeSelectProps) => {
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
