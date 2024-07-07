import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Paper } from '@mui/material';
import { useGetAuthorizedStudentAllDataQuery } from 'Redux/Slices/Students/studentsSlice';
import FullScreenLoader from 'Components/Reusable/FullScreenLoader/FullScreenLoader';
import type { DetailRowProps } from 'Components/ViewsComponents/PersonalData/DetailRow';
import BasicInfo from 'Components/ViewsComponents/PersonalData/BasicInfo';
import { PersonalDetails } from 'Components/ViewsComponents/PersonalData/PersonalDetails';
import '../Styles/PersonalData.scss';

export interface Section {
  title: string;
  details: DetailRowProps[];
}

function EmployeePersonalData() {
  const { t } = useTranslation();
  const { data, isLoading } = useGetAuthorizedStudentAllDataQuery();

  const sections: Section[] = useMemo(
    () => [
      {
        title: t('personalDetails'),
        details: [
          { icon: 'AccountCircle', label: t('name'), value: data?.name },
          { icon: 'AccountCircle', label: t('surname'), value: data?.surname },
          { icon: 'Cake', label: t('dateOfBirth'), value: data?.dateOfBirth ? new Date(data.dateOfBirth).toLocaleDateString() : undefined },
          { icon: 'ContactMail', label: t('pesel'), value: data?.pesel },
          { icon: 'Public', label: t('gender'), value: data?.gender },
          { icon: 'Language', label: t('nationality'), value: data?.nationality },
        ],
      },
      {
        title: t('addressDetails'),
        details: [
          { icon: 'Public', label: t('country'), value: data?.address.country },
          { icon: 'LocationCity', label: t('city'), value: data?.address.city },
          { icon: 'MailOutline', label: t('postalCode'), value: data?.address.postalCode },
          { icon: 'Home', label: t('street'), value: data?.address.street },
          { icon: 'MapsHomeWork', label: t('buildingNumber'), value: data?.address.buildingNumber },
          { icon: 'Home', label: t('apartmentNumber'), value: data?.address.apartmentNumber },
        ],
      },
      {
        title: t('additionalDetails'),
        details: [
          { icon: 'Email', label: t('contactEmail'), value: data?.contactEmail },
          { icon: 'Phone', label: t('contactPhone'), value: data?.contactPhone },
          { icon: 'DateRange', label: t('dateOfAdmission'), value: data?.dateOfAdmission ? new Date(data.dateOfAdmission).toLocaleDateString() : undefined },
          { icon: 'HistoryEdu', label: t('permissionForDataProcessing'), value: data?.consent.permissionForDataProcessing ? 'Yes' : 'No' },
          { icon: 'HistoryEdu', label: t('permissionForPhoto'), value: data?.consent.permissionForPhoto ? 'Yes' : 'No' },
        ],
      },
    ],
    [t, data]
  );

  if (isLoading) return <FullScreenLoader />;

  return (
    <>
      <Box className="BasicInfoBox">
        <BasicInfo name={data?.name ?? ''} surname={data?.surname ?? ''} />
        <Paper>There will be something </Paper>
      </Box>
      <PersonalDetails sections={sections} />
    </>
  );
}

export default EmployeePersonalData;
