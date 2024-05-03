import { useGetUserAllDataQuery } from '@features/userAllData/userAllData';
import { Box, Paper, Typography, Avatar } from '@mui/material';
import UserIcon from '@assets/images/user-photo.jpg';
import FullScreenLoader from '@components/Reusable/FullScreenLoader/FullScreenLoader';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CakeIcon from '@mui/icons-material/Cake';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import DetailsDisplay from '@components/ViewsComponents/PersonalData/DetailsDisplay';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DoDisturbAltRoundedIcon from '@mui/icons-material/DoDisturbAltRounded';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import './style.scss';

const personalDetails = [
  { icon: <AccountCircleIcon color="primary" />, name: 'name' },
  { icon: <AccountCircleIcon color="primary" />, name: 'surname' },
  { icon: <CakeIcon color="primary" />, name: 'dateOfBirth' },
  { icon: <ContactMailIcon color="primary" />, name: 'pesel' },
  { icon: <PublicIcon color="primary" />, name: 'gender' },
  { icon: <LanguageIcon color="primary" />, name: 'nationality' },
];

const addressDetails = [
  { icon: <PublicIcon color="primary" />, name: 'country' },
  { icon: <LocationCityIcon color="primary" />, name: 'city' },
  { icon: <MailOutlineIcon color="primary" />, name: 'postalCode' },
  { icon: <HomeIcon color="primary" />, name: 'street' },
  { icon: <MapsHomeWorkIcon color="primary" />, name: 'buildingNumber' },
  { icon: <HomeIcon color="primary" />, name: 'apartmentNumber' },
];

const additionalDetails = [
  { icon: <EmailIcon color="primary" />, name: 'contactEmail' },
  { icon: <PhoneIcon color="primary" />, name: 'contactPhone' },
  { icon: <DateRangeIcon color="primary" />, name: 'dateOfAdmission' },
  { icon: <HistoryEduIcon color="primary" />, name: 'permissionForDataProcessing', format: (bool: boolean) => (bool ? <CheckBoxIcon color="primary" /> : <DoDisturbAltRoundedIcon color="primary" />) },
  { icon: <HistoryEduIcon color="primary" />, name: 'permissionForPhoto', format: (bool: boolean) => (bool ? <CheckBoxIcon color="primary" /> : <DoDisturbAltRoundedIcon color="primary" />) },
];

function PersonalDataForm() {
  const { data, isLoading } = useGetUserAllDataQuery(undefined);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <Box sx={{ m: 6, pr: 2, position: 'relative', width: '90%' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'min-content auto', gap: 2, mb: 2 }}>
        <Paper sx={{ display: 'grid', gridTemplateColumns: '1fr', justifyItems: 'center', gap: 2, p: 4 }}>
          <Avatar alt="user icon" sx={{ width: 120, height: 120 }} src={UserIcon as string} />
          <Typography variant="h6" color="primary" sx={{ textWrap: 'nowrap', fontWeight: 600 }}>{`${data?.name} ${data?.surname}`}</Typography>
        </Paper>
        <Paper>There need to be something</Paper>
      </Box>
      <Paper className="DetailsPaper">
        <DetailsDisplay title="Personal Details" details={personalDetails} data={data as unknown as Record<string, string>} />
        <DetailsDisplay title="Address Details" details={addressDetails} data={data as unknown as Record<string, string>} />
        <DetailsDisplay title="Additional Details" details={additionalDetails} data={data as unknown as Record<string, boolean | string>} />
      </Paper>
    </Box>
  );
}

export default PersonalDataForm;
