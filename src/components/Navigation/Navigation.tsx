import { useState, useCallback } from 'react';
import { Drawer } from './Styled';
import { useNavigate } from 'react-router-dom';
import { Box, Collapse, Divider, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '@assets/images/Logo.png';
import UserProfile from './UserProfile';
import MenuItemComponent from './MenuItem';
import type { OpenMenuItemsState, NavigationProps } from './types';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '@features/auth/authSlice';

function Navigation({ menuItems }: NavigationProps) {
  //Data handlers
  const token = useSelector(selectCurrentToken);
  const [isOpenNav, setIsOpenNav] = useState(true);
  const [openMenuItems, setOpenMenuItems] = useState<OpenMenuItemsState>(() =>
    //Lazy initialization pattern is only called when the component is mounted and not on every update
    menuItems.reduce<OpenMenuItemsState>((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {})
  );
  const navigate = useNavigate();

  //Functions
  const onNavigate = useCallback(
    (linkTo: string) => {
      navigate(linkTo);
    },
    [navigate]
  );

  const toggleMenuHandler = useCallback(() => {
    setIsOpenNav(!isOpenNav);
  }, [isOpenNav]);

  const onToggleSubmenu = useCallback((id: string) => {
    setOpenMenuItems(prevState => ({ ...prevState, [id]: !prevState[id] }));
  }, []);

  return (
    <Drawer component="nav" isOpen={isOpenNav}>
      <Box className="ContentContainer">
        <Box className="HeaderContainer">
          <Box className="LogoContainer">
            <Box className="Logo IncreaseSizeAnimation" component="img" src={Logo} />
          </Box>
          <MenuIcon className="MenuToggleIcon IncreaseSizeAnimation" fontSize="medium" onClick={toggleMenuHandler} />
        </Box>
        {Boolean(token) && <UserProfile />}
        <Divider className="Divider" variant="middle" />
        <List className="List" component="ul">
          {menuItems.map(item => (
            <Box key={item.id}>
              <MenuItemComponent isOpen={openMenuItems[item.id]} item={item} onNavigate={onNavigate} onToggleSubmenu={item.children ? onToggleSubmenu : undefined} />
              {item.children ? (
                <Collapse in={openMenuItems[item.id]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map(subItem => (
                      <MenuItemComponent isChildren item={subItem} key={subItem.id} onNavigate={onNavigate} />
                    ))}
                  </List>
                </Collapse>
              ) : null}
            </Box>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Navigation;
