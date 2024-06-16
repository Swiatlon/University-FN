/* eslint-disable react/no-multi-comp */

import { useGetUserAllDataQuery } from '@features/userAllData/userAllData';
import { Box, Paper, Typography, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
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
import './PersonalData.scss';

function FormatPermissionIcon({ hasPermission }: boolean) {
  return hasPermission ? <CheckBoxIcon color="primary" /> : <DoDisturbAltRoundedIcon color="primary" />;
}

function PersonalDataForm() {
  const { t } = useTranslation();
  const { data, isLoading } = useGetUserAllDataQuery(undefined);

  const personalDetails = [
    { icon: <AccountCircleIcon color="primary" />, name: 'name', label: t('name') },
    { icon: <AccountCircleIcon color="primary" />, name: 'surname', label: t('surname') },
    { icon: <CakeIcon color="primary" />, name: 'dateOfBirth', label: t('dateOfBirth') },
    { icon: <ContactMailIcon color="primary" />, name: 'pesel', label: t('pesel') },
    { icon: <PublicIcon color="primary" />, name: 'gender', label: t('gender') },
    { icon: <LanguageIcon color="primary" />, name: 'nationality', label: t('nationality') },
  ];

  const addressDetails = [
    { icon: <PublicIcon color="primary" />, name: 'country', label: t('country') },
    { icon: <LocationCityIcon color="primary" />, name: 'city', label: t('city') },
    { icon: <MailOutlineIcon color="primary" />, name: 'postalCode', label: t('postalCode') },
    { icon: <HomeIcon color="primary" />, name: 'street', label: t('street') },
    { icon: <MapsHomeWorkIcon color="primary" />, name: 'buildingNumber', label: t('buildingNumber') },
    { icon: <HomeIcon color="primary" />, name: 'apartmentNumber', label: t('apartmentNumber') },
  ];

  const additionalDetails = [
    { icon: <EmailIcon color="primary" />, name: 'contactEmail', label: t('contactEmail') },
    { icon: <PhoneIcon color="primary" />, name: 'contactPhone', label: t('contactPhone') },
    { icon: <DateRangeIcon color="primary" />, name: 'dateOfAdmission', label: t('dateOfAdmission') },
    {
      icon: <HistoryEduIcon color="primary" />,
      name: 'permissionForDataProcessing',
      label: t('permissionForDataProcessing'),
      format: FormatPermissionIcon,
    },
    {
      icon: <HistoryEduIcon color="primary" />,
      name: 'permissionForPhoto',
      label: t('permissionForPhoto'),
      format: FormatPermissionIcon,
    },
  ];

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <>
      <Box className="BasicInfoBox">
        <Paper className="AvatarBox">
          <Avatar alt="user icon" sx={{ width: 120, height: 120 }} src={UserIcon as string} />
          <Typography variant="h6" color="primary" sx={{ textWrap: 'nowrap', fontWeight: 600 }}>{`${data?.name} ${data?.surname}`}</Typography>
        </Paper>
        <Paper>There need to be something</Paper>
      </Box>
      <Paper className="DetailsPaper">
        <DetailsDisplay title={t('personalDetails')} details={personalDetails} data={data as unknown as Record<string, string>} />
        <DetailsDisplay title={t('addressDetails')} details={addressDetails} data={data as unknown as Record<string, string>} />
        <DetailsDisplay title={t('additionalDetails')} details={additionalDetails} data={data as unknown as Record<string, boolean | string>} />
      </Paper>
    </>
  );
}

export default PersonalDataForm;
