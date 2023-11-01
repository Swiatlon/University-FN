import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import PeopleIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material';
import FitbitIcon from '@mui/icons-material/Fitbit';
import { Link } from 'react-router-dom';

const Drawer = styled(Box)(({ theme }) => ({
  '&': {
    height: '100vh',
    position: 'sticky',
    top: 0,
    gridArea: 'navigation',
    borderRight: 'none',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .MuiToolbar-root': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    paddingLeft: '8px',
  },
  '& .CompanyName': {
    // [theme.breakpoints.down('sm')]: {
    //   display: 'none',
    // },
  },
}));

const Navigation = () => {
  const menuItems = [
    { id: 1, text: 'AdminPanel', icon: <AdminPanelSettingsIcon />, linkTo: '/AdminPanel' },
    { id: 2, text: 'firstItem', icon: <PeopleIcon /> },
    { id: 3, text: 'firstItem', icon: <PeopleIcon /> },
    { id: 4, text: 'firstItem', icon: <PeopleIcon /> },
  ];
  return (
    <Drawer>
      <Toolbar className="space-between">
        <IconButton color="inherit" disableRipple component={Link} to="/">
          <ListItemIcon sx={{ color: 'white' }}>
            <FitbitIcon />
          </ListItemIcon>
          <ListItemText primary="Company-Name" className="CompanyName" />
        </IconButton>
      </Toolbar>
      <List component="nav">
        {menuItems.map(item => (
          <ListItemButton key={item.id} component={Link} to={`${item.linkTo}`}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText secondary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Navigation;
