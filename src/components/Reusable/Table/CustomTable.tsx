import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

interface CustomTableProps {
  rows: [];
  columns: [];
}

const TableContainer = styled(Box)(() => ({
  margin: '0 auto',
  width: '60vw',
  maxWidth: '900px',
  padding: '0px 25px',
}));

function CustomTable({ rows, columns }: CustomTableProps) {
  return (
    <TableContainer>
      <Grid rows={rows} columns={columns}>
        <Table />
        <TableHeaderRow />
      </Grid>
    </TableContainer>
  );
}

export default CustomTable;
