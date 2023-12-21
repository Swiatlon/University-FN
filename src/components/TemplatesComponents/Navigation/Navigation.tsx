import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import PeopleIcon from '@mui/icons-material/People';
import MenuIcon from '@mui/icons-material/Menu';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ListItemButton, ListItemIcon, ListItemText, Box, Divider, Avatar, Typography, BoxProps } from '@mui/material';
import Logo from '@assets/images/Logo.png';
import UserIcon from '@assets/icons/exampleUserIcon.png';
import { Link } from 'react-router-dom';
import './Navigation.scss';
interface NavigationProps {
  isOpen: boolean;
  toggleMenuHandler: () => void;
}

const TopInformationContainer = styled(Box)<{ isOpen: boolean } & BoxProps>(({ isOpen }) => ({
  '.Logo': {
    opacity: isOpen ? 1 : 0,
    width: isOpen ? '120px' : '0px',
    transition: '600ms all',
  },
  '.UsernameInfo': {
    '.Avatar ': {
      width: isOpen ? '70px' : '40px',
      marginBottom: isOpen ? '12px' : '0px',
      transition: '600ms all',
    },
    '.UserNameRoleBox': {
      opacity: isOpen ? 1 : 0,
      minHeight: isOpen ? 'auto' : '0px',
      transition: '600ms all',
    },
  },
}));

const Navigation = ({ toggleMenuHandler, isOpen }: NavigationProps) => {
  const menuItems = [
    { id: 1, text: 'AdminPanel', icon: <AdminPanelSettingsIcon />, linkTo: '/AdminPanel' },
    { id: 2, text: 'Create Student', icon: <PeopleIcon />, linkTo: '/CreateStudent' },
    { id: 3, text: 'firstItem', icon: <PeopleIcon /> },
    { id: 4, text: 'firstItem', icon: <PeopleIcon /> },
  ];
  return (
    <Box component="nav" className="Drawer">
      <TopInformationContainer className="TopInformationContainer" isOpen={isOpen}>
        <Box className="LogoContainer">
          <Box className="Logo" component="img" src={Logo} />
          <MenuIcon onClick={toggleMenuHandler} className="Hamburger" fontSize="medium" />
        </Box>
        <Box className="UsernameInfo">
          <Avatar src={UserIcon} alt="user icon" className="Avatar" />
          {isOpen && (
            <Box className="UserNameRoleBox">
              <Typography variant="body1" fontWeight="bold" className="UserName">
                Wiercik
              </Typography>
              <Typography variant="body2" className="Role">
                Role: Admin
              </Typography>
            </Box>
          )}
        </Box>
      </TopInformationContainer>

      <Divider variant="middle" className="Divider"></Divider>

      <List component="ul" className="List">
        {menuItems.map(item => (
          <Box component="li" className="ListItem">
            <ListItemButton key={item.id} component={Link} to={`${item.linkTo}`}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText secondary={item.text} />
            </ListItemButton>
            <KeyboardArrowDownIcon sx={{ cursor: 'pointer' }} />
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default Navigation;
