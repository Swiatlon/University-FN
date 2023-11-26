import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import PeopleIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ListItemButton, ListItemIcon, ListItemText, Box, Divider, Avatar, Typography } from '@mui/material';
import Logo from '@assets/images/Logo.png';
import UserIcon from '@assets/icons/exampleUserIcon.png';
import { Link } from 'react-router-dom';

const Drawer = styled(Box)(() => ({
  '&': {
    width: '250px',
    height: '100vh',
    top: 0,
    left: 0,
    position: 'sticky',
    background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, #041141 36%, #081131 46%, rgba(1,16,71,1) 87%, rgba(6,14,44,1) 100%)',
  },
}));

const NavigationTopContent = styled(Box)(() => ({
  '&': {
    paddingTop: '30px',
    paddingBottom: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    justifyContent: 'center',
  },
}));

const Navigation = () => {
  const menuItems = [
    { id: 1, text: 'AdminPanel', icon: <AdminPanelSettingsIcon />, linkTo: '/AdminPanel' },
    { id: 2, text: 'CreatePatient', icon: <PeopleIcon />, linkTo: '/CreatePatient' },
    { id: 3, text: 'firstItem', icon: <PeopleIcon /> },
    { id: 4, text: 'firstItem', icon: <PeopleIcon /> },
  ];
  return (
    <Drawer component="nav">
      <NavigationTopContent>
        <IconButton component={Link} to="/" disableRipple>
          <Box component="img" src={Logo} alt="company logo" />
        </IconButton>
        <Avatar src={UserIcon} alt="user icon" sx={{ width: '70px', height: 'auto', my: 1.5 }} />
        <Typography variant="body1" fontWeight="bold">
          Przemysław Światłoń
        </Typography>
        <Typography variant="body2">Role: Admin</Typography>
      </NavigationTopContent>

      <Divider variant="middle"></Divider>

      <List component="ul">
        {menuItems.map(item => (
          <Box component="li" display="flex" alignItems="center" pr={2}>
            <ListItemButton key={item.id} component={Link} to={`${item.linkTo}`}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText secondary={item.text} />
            </ListItemButton>
            <KeyboardArrowDownIcon sx={{ cursor: 'pointer' }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

export default Navigation;
