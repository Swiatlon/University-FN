/* eslint-disable sonarjs/no-duplicate-string */
import { Box } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const personalDataFields = [
  { id: 'name', label: 'Name' },
  { id: 'surname', label: 'Surname' },
  { id: 'dateOfBirth', label: 'Date of Birth' },
  { id: 'pesel', label: 'PESEL' },
  { id: 'gender', label: 'Gender' },
  { id: 'country', label: 'Country' },
  { id: 'city', label: 'City' },
  { id: 'postalCode', label: 'Postal Code' },
  { id: 'street', label: 'Street' },
  { id: 'buildingNumber', label: 'Building Number' },
  { id: 'apartmentNumber', label: 'Apartment Number' },
];

function PersonalDataForm() {
  return (
    <Box sx={{ display: 'flex', gap: ' 24px', my: 4, mx: 4, flexWrap: 'wrap' }}>
      <Box sx={{ width: '1200px', height: '360px', background: 'linear-gradient(180deg,#020b2c 50%, rgba(6, 14, 44, 1) 120%)', boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2);' }}>ABCdefg</Box>
      <Box sx={{ width: '360px', height: '360px', background: 'linear-gradient(180deg,#020b2c 50%, rgba(6, 14, 44, 1) 120%)', boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2);' }}>ABCefgh</Box>
      <Box sx={{ width: '360px', height: '360px', background: 'linear-gradient(180deg,#020b2c 50%, rgba(6, 14, 44, 1) 120%)', boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2);' }}>ABCedgh</Box>
      <Box sx={{ width: '1200px', height: '360px', background: 'linear-gradient(180deg,#020b2c 50%, rgba(6, 14, 44, 1) 120%)', boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2);' }}>ABCdefg</Box>
      <Box sx={{ width: '360px', height: '360px', background: 'linear-gradient(180deg,#020b2c 50%, rgba(6, 14, 44, 1) 120%)', boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2);' }}>ABCefgh</Box>
      <Box sx={{ width: '360px', height: '360px', background: 'linear-gradient(180deg,#020b2c 50%, rgba(6, 14, 44, 1) 120%)', boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2);' }}>ABCedgh</Box>
      <Box sx={{ width: '1200px', height: '360px', background: 'linear-gradient(180deg,#020b2c 50%, rgba(6, 14, 44, 1) 120%)', boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2);' }}>ABCdefg</Box>
      <Box sx={{ width: '360px', height: '360px', background: 'linear-gradient(180deg,#020b2c 50%, rgba(6, 14, 44, 1) 120%)', boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2);' }}>ABCefgh</Box>
      <Box sx={{ width: '360px', height: '360px', background: 'linear-gradient(180deg,#020b2c 50%, rgba(6, 14, 44, 1) 120%)', boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2);' }}>ABCedgh</Box>
    </Box>
    /*
     * <Paper sx={{ m: 6, background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, #061549 36%,  87%, rgba(6, 14, 44, 1) 100%)' }}>
     *   <Typography gutterBottom variant="h5">
     *     Personal Data
     *   </Typography>
     *   <Avatar alt="user icon" className="Avatar IncreaseSizeAnimation" src={UserIcon} />
     *   {personalDataFields.map(field => (
     *     <TextField fullWidth id={field.id} key={field.id} label={field.label} name={field.id} sx={{ my: 2 }} variant="outlined" />
     *   ))}
     * </Paper>
     */
  );
}

export default PersonalDataForm;
