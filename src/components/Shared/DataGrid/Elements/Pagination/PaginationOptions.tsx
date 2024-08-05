import { Box, Typography, type SelectChangeEvent } from '@mui/material';
import React from 'react';
import PageSizeSelect from './PageSizeSelect';
import { beautifyNumbers } from 'Routes/Utils/Decorators';

interface PaginationOptionsProps {
  pageSize: number;
  totalRows: number;
  handlePageSizeChange: (event: SelectChangeEvent<number>) => void;
}

const PaginationOptions = React.forwardRef<HTMLDivElement, PaginationOptionsProps>(({ pageSize, totalRows, handlePageSizeChange }, ref) => (
  <Box ref={ref} className="PaginationControls">
    <Typography>Rows per page:</Typography>
    <PageSizeSelect value={pageSize} onChange={handlePageSizeChange} />
    <Typography>Total: {beautifyNumbers(totalRows)}</Typography>
  </Box>
));

PaginationOptions.displayName = 'PaginationOptions';

export default PaginationOptions;
