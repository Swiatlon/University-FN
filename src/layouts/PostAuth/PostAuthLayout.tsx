import { Outlet } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Container, Content } from 'layouts/Styled';
import AppBar from '@components/AppBar/AppBar';
import Navigation from '@components/Navigation/Navigation';
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

function PostAuthLayout() {
  const menuItems = [
    {
      id: uuidv4(),
      text: 'Dashboard',
      icon: <DashboardIcon />,
      linkTo: '/dashboard',
    },
    {
      id: uuidv4(),
      text: 'Profile',
      icon: <PersonIcon />,
      children: [
        {
          id: uuidv4(),
          text: 'Personal Data',
          icon: <DescriptionIcon />,
          linkTo: '/profile/personal-data',
        },
        {
          id: uuidv4(),
          text: 'Account Settings',
          icon: <SettingsIcon />,
          linkTo: '/profile/settings',
        },
      ],
    },
    {
      id: uuidv4(),
      text: 'Academics',
      icon: <BookIcon />,
      children: [
        {
          id: uuidv4(),
          text: 'Grades',
          icon: <GradeIcon />,
          linkTo: '/academics/grades',
        },
        {
          id: uuidv4(),
          text: 'Courses',
          icon: <BookIcon />,
          linkTo: '/academics/courses',
        },
        {
          id: uuidv4(),
          text: 'Timetable',
          icon: <EventIcon />,
          linkTo: '/academics/timetable',
        },
      ],
    },
    {
      id: uuidv4(),
      text: 'Resources',
      icon: <FolderIcon />,
      children: [
        {
          id: uuidv4(),
          text: 'Sample Files',
          icon: <DescriptionIcon />,
          linkTo: '/resources/sample-files',
        },
        {
          id: uuidv4(),
          text: 'Library',
          icon: <LibraryBooksIcon />,
          linkTo: '/resources/library',
        },
      ],
    },
    {
      id: uuidv4(),
      text: 'Financials',
      icon: <PaymentIcon />,
    },
    {
      id: uuidv4(),
      text: 'Community',
      icon: <SearchIcon />,
      children: [
        {
          id: uuidv4(),
          text: 'Find a Teacher',
          icon: <SearchIcon />,
          linkTo: '/community/find-teacher',
        },
        {
          id: uuidv4(),
          text: 'Events',
          icon: <EventIcon />,
          linkTo: '/community/events',
        },
        {
          id: uuidv4(),
          text: 'Clubs',
          icon: <GroupIcon />,
          linkTo: '/community/clubs',
        },
      ],
    },
    {
      id: uuidv4(),
      text: 'Messages',
      icon: <MessageIcon />,
      linkTo: '/messages',
    },
    {
      id: uuidv4(),
      text: 'Logout',
      icon: <LogoutIcon />,
      linkTo: '/logout',
    },
  ];

  return (
    <Container>
      <Navigation menuItems={menuItems} />
      <Content>
        <AppBar />
        <Outlet />
      </Content>
    </Container>
  );
}

export default PostAuthLayout;
