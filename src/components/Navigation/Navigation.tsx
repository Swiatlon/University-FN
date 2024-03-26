import { useState } from 'react';
import { Drawer } from './Styled';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Divider, Avatar, Typography, List, ListItemIcon, ListItemText } from '@mui/material';
import Logo from '@assets/images/Logo.png';
import UserIcon from '@assets/icons/exampleUserIcon.png';
import { useNavigate } from 'react-router-dom';

interface MenuItem {
  id: string;
  text: string;
  icon: JSX.Element;
  linkTo?: string;
}

interface NavigationProps {
  menuItems: MenuItem[];
}

function Navigation({ menuItems }: NavigationProps) {
  const [isOpenNav, setIsOpenNav] = useState(true);
  const navigate = useNavigate();

  const handleNavigate = (linkTo: string) => {
    navigate(linkTo);
  };

  const toggleMenuHandler = () => {
    setIsOpenNav(!isOpenNav);
  };

  return (
    <Drawer isOpen={isOpenNav} component="nav">
      <Box className="ContentContainer">
        <Box className="HeaderContainer">
          <Box className="LogoContainer">
            <Box className="Logo IncreaseSizeAnimation" component="img" src={Logo} />
          </Box>
          <MenuIcon onClick={toggleMenuHandler} className="MenuToggleIcon IncreaseSizeAnimation" fontSize="medium" />
        </Box>

        <Box className="UserProfileContainer">
          <Avatar src={UserIcon} alt="user icon" className="Avatar IncreaseSizeAnimation" />
          <Box className="UserInfoDisplay">
            <Typography variant="body1" fontWeight="bold" className="UsernameText">
              Wiercik
            </Typography>
            <Typography variant="body2" className="userRoleText">
              Role: Admin
            </Typography>
          </Box>
        </Box>

        <Divider variant="middle" className="Divider"></Divider>

        <List component="ul" className="List">
          {menuItems.map(item => (
            <Box component="li" key={item.id}>
              <Box
                className="ListItem IncreaseSizeAnimation"
                onClick={() => {
                  if (item.linkTo) {
                    return handleNavigate(item.linkTo);
                  }
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Navigation;
