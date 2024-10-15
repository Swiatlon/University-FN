import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Paper } from '@mui/material';
import FullScreenLoader from 'components/shared/fullScreenLoader/FullScreenLoader';
import BasicInfo from 'components/viewsComponents/personalData/BasicInfo';
import { PersonalDetails } from 'components/viewsComponents/personalData/PersonalDetails';
import { useGetAuthorizedStudentAllDataQuery } from 'redux/apiSlices/students/Students.Api.Slice';
import type { IDetailRowProps } from 'components/viewsComponents/personalData/DetailRow';
import '../styles/PersonalData.scss';

export interface ISection {
  title: string;
  details: IDetailRowProps[];
}

function EmployeePersonalData() {
  const { t } = useTranslation();
  const { data, isLoading } = useGetAuthorizedStudentAllDataQuery();

  const sections: ISection[] = useMemo(
    () => [
      {
        title: t('personalDetails'),
        details: [
          { icon: 'AccountCircle', label: t('name'), value: data?.name },
          { icon: 'AccountCircle', label: t('surname'), value: data?.surname },
          {
            icon: 'Cake',
            label: t('dateOfBirth'),
            value: data?.dateOfBirth ? new Date(data.dateOfBirth).toLocaleDateString() : undefined,
          },
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
          {
            icon: 'DateRange',
            label: t('dateOfAdmission'),
            value: data?.dateOfAdmission ? new Date(data.dateOfAdmission).toLocaleDateString() : undefined,
          },
          {
            icon: 'HistoryEdu',
            label: t('permissionForDataProcessing'),
            value: data?.consent.permissionForDataProcessing ? 'Yes' : 'No',
          },
          {
            icon: 'HistoryEdu',
            label: t('permissionForPhoto'),
            value: data?.consent.permissionForPhoto ? 'Yes' : 'No',
          },
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
