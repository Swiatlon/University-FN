import { useTranslation } from 'react-i18next';
import BookIcon from '@mui/icons-material/Book';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import EventIcon from '@mui/icons-material/Event';
import GradingIcon from '@mui/icons-material/Grading';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
import { RolesEnum } from 'contract/enums/Enums';
import { v4 as uuidv4 } from 'uuid';

export const useMenuItems = () => {
  const { t } = useTranslation();

  return [
    {
      id: uuidv4(),
      text: t('dashboard'),
      icon: <DashboardIcon />,
      availableForRoles: [RolesEnum.STUDENT],
      linkTo: 'dashboard',
    },
    {
      id: uuidv4(),
      text: t('profile'),
      icon: <PersonIcon />,
      availableForRoles: [RolesEnum.STUDENT],
      children: [
        {
          id: uuidv4(),
          text: t('personal_data'),
          icon: <DescriptionIcon />,
          linkTo: 'profile/personal-data',
        },
      ],
    },
    {
      id: uuidv4(),
      text: t('academics'),
      icon: <BookIcon />,
      availableForRoles: [RolesEnum.STUDENT],
      children: [
        {
          id: uuidv4(),
          text: t('courses'),
          icon: <BookIcon />,
          linkTo: 'academics/courses',
        },
        {
          id: uuidv4(),
          text: t('grades'),
          icon: <GradingIcon />,
          linkTo: 'academics/grades',
        },
      ],
    },
    {
      id: uuidv4(),
      text: t('community'),
      icon: <SearchIcon />,
      children: [
        {
          id: uuidv4(),
          text: t('teachers'),
          icon: <SchoolIcon />,
          linkTo: 'community/teachers',
          availableForRoles: [RolesEnum.STUDENT],
        },
        {
          id: uuidv4(),
          text: t('events'),
          icon: <EventIcon />,
          linkTo: 'community/events',
        },
      ],
    },
    {
      id: uuidv4(),
      text: t('logout'),
      icon: <LogoutIcon />,
      linkTo: 'logout',
    },
  ];
};
