import CustomTable from '@components/Reusable/Table/CustomTable';
import { useGetDoctorsQuery } from '@features/doctors/doctors';
import { Box } from '@mui/material';

function AdminPanel() {
  const { data, isLoading, isError, isSuccess } = useGetDoctorsQuery();

  if (isLoading) return <div>Loading...</div>;

  if (isSuccess) {
    console.log(data);
  }
  /* eslint-enable no-alert, no-console */

  const columns = [
    { name: 'id', getCellValue: row => row.id },
    { name: 'name', getCellValue: row => row.name },
    { name: 'specializations', getCellValue: row => row.specializations.map(obj => obj.name).join(',') },
    { name: 'patients', getCellValue: row => row.patients.map(obj => obj.name).join(',') },
    { name: 'role', getCellValue: row => row.role.name },
  ];
  // console.log(rows);
  return (
    <Box mt={10}>
      <CustomTable columns={columns} rows={data} />
    </Box>
  );
}

export default AdminPanel;
