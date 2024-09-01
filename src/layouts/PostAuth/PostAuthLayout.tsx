import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import BookIcon from '@mui/icons-material/Book';
import DescriptionIcon from '@mui/icons-material/Description';
import EventIcon from '@mui/icons-material/Event';
import FolderIcon from '@mui/icons-material/Folder';
import LogoutIcon from '@mui/icons-material/Logout';
import MessageIcon from '@mui/icons-material/Message';
import PaymentIcon from '@mui/icons-material/Payment';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
import './PostAuthLayout.scss';
import { Box } from '@mui/material';
import { RolesEnum } from 'Contract/Enums/Enums';
import { Container, Content } from 'Layouts/Styled';
import { v4 as uuidv4 } from 'uuid';
import AppBar from 'Components/Shared/AppBar/AppBar';
import Navigation from 'Components/Shared/Navigation/Navigation';

function PostAuthLayout() {
  const { t } = useTranslation();

  const menuItems = [
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
      ],
    },
    {
      id: uuidv4(),
      text: t('resources'),
      icon: <FolderIcon />,
      availableForRoles: [RolesEnum.STUDENT],
      children: [
        {
          id: uuidv4(),
          text: t('sample_files'),
          icon: <DescriptionIcon />,
          linkTo: '/resources/sample-files',
        },
      ],
    },
    {
      id: uuidv4(),
      text: t('financials'),
      icon: <PaymentIcon />,
      availableForRoles: [RolesEnum.STUDENT],
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
      text: t('messages'),
      icon: <MessageIcon />,
      linkTo: '/messages',
      availableForRoles: [RolesEnum.STUDENT],
    },
    {
      id: uuidv4(),
      text: t('logout'),
      icon: <LogoutIcon />,
      linkTo: 'logout',
    },
  ];

  return (
    <Container>
      <Navigation menuItems={menuItems} />
      <Content>
        <AppBar />
        <Box className="ContentContainer">
          <Outlet />
        </Box>
      </Content>
    </Container>
  );
}

export default PostAuthLayout;
