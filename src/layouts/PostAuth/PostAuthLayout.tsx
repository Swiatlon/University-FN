import { Outlet } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Container, Content } from 'Layouts/Styled';
import AppBar from 'Components/AppBar/AppBar';
import Navigation from 'Components/Navigation/Navigation';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import GradeIcon from '@mui/icons-material/Grade';
import BookIcon from '@mui/icons-material/Book';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import FolderIcon from '@mui/icons-material/Folder';
import PaymentIcon from '@mui/icons-material/Payment';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import DescriptionIcon from '@mui/icons-material/Description';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import { useTranslation } from 'react-i18next';
import './PostAuthLayout.scss';
import { Box } from '@mui/material';

function PostAuthLayout() {
  const { t } = useTranslation();

  const menuItems = [
    {
      id: uuidv4(),
      text: t('dashboard'),
      icon: <DashboardIcon />,
      linkTo: 'dashboard',
    },
    {
      id: uuidv4(),
      text: t('profile'),
      icon: <PersonIcon />,
      children: [
        {
          id: uuidv4(),
          text: t('personal_data'),
          icon: <DescriptionIcon />,
          linkTo: 'profile/personal-data',
        },
        {
          id: uuidv4(),
          text: t('account_settings'),
          icon: <SettingsIcon />,
          linkTo: '/profile/settings',
        },
      ],
    },
    {
      id: uuidv4(),
      text: t('academics'),
      icon: <BookIcon />,
      children: [
        {
          id: uuidv4(),
          text: t('grades'),
          icon: <GradeIcon />,
          linkTo: '/academics/grades',
        },
        {
          id: uuidv4(),
          text: t('courses'),
          icon: <BookIcon />,
          linkTo: '/academics/courses',
        },
        {
          id: uuidv4(),
          text: t('timetable'),
          icon: <EventIcon />,
          linkTo: '/academics/timetable',
        },
      ],
    },
    {
      id: uuidv4(),
      text: t('resources'),
      icon: <FolderIcon />,
      children: [
        {
          id: uuidv4(),
          text: t('sample_files'),
          icon: <DescriptionIcon />,
          linkTo: '/resources/sample-files',
        },
        {
          id: uuidv4(),
          text: t('library'),
          icon: <LibraryBooksIcon />,
          linkTo: '/resources/library',
        },
      ],
    },
    {
      id: uuidv4(),
      text: t('financials'),
      icon: <PaymentIcon />,
    },
    {
      id: uuidv4(),
      text: t('community'),
      icon: <SearchIcon />,
      children: [
        {
          id: uuidv4(),
          text: t('find_teacher'),
          icon: <SearchIcon />,
          linkTo: '/community/find-teacher',
        },
        {
          id: uuidv4(),
          text: t('events'),
          icon: <EventIcon />,
          linkTo: '/community/events',
        },
        {
          id: uuidv4(),
          text: t('clubs'),
          icon: <GroupIcon />,
          linkTo: '/community/clubs',
        },
      ],
    },
    {
      id: uuidv4(),
      text: t('messages'),
      icon: <MessageIcon />,
      linkTo: '/messages',
    },
    {
      id: uuidv4(),
      text: t('logout'),
      icon: <LogoutIcon />,
      linkTo: '/logout',
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
