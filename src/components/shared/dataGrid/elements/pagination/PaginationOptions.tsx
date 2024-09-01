import React from 'react';
import { Box, Typography, type SelectChangeEvent } from '@mui/material';
import { beautifyNumbers } from 'routes/utils/Decorators';
import PageSizeSelect from './PageSizeSelect';

interface IPaginationOptionsProps {
  pageSize: number;
  totalRows: number;
  handlePageSizeChange: (event: SelectChangeEvent<number>) => void;
}

const PaginationOptions = React.forwardRef<HTMLDivElement, IPaginationOptionsProps>(
  ({ pageSize, totalRows, handlePageSizeChange }, ref) => (
    <Box ref={ref} className="PaginationControls">
      <Typography>Rows per page:</Typography>
      <PageSizeSelect value={pageSize} onChange={handlePageSizeChange} />
      <Typography>Total: {beautifyNumbers(totalRows)}</Typography>
    </Box>
  )
);

PaginationOptions.displayName = 'PaginationOptions';

export default PaginationOptions;
