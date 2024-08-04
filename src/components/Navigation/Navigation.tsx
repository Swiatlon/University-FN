import { useState, useCallback } from 'react';
import { Drawer } from './Styled';
import { useNavigate } from 'react-router-dom';
import { Box, Collapse, Divider, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '@assets/images/Logo.png';
import UserProfile from './UserProfile';
import MenuItemComponent from './MenuItem';
import type { OpenMenuItemsState, NavigationProps } from './types';
import { useTypedSelector } from 'Hooks/storeHooks';
import { useDispatch } from 'react-redux';
import { selectCurrentToken } from 'Redux/Slices/auth/authSlice';
import { selectIsDrawerOpen, toggleDrawer } from 'Redux/Slices/view/viewSlice';

function Navigation({ menuItems }: NavigationProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useTypedSelector(selectCurrentToken);
  const isOpen = useTypedSelector(selectIsDrawerOpen);

  const handleToggleDrawer = () => {
    dispatch(toggleDrawer());
  };

  const [openMenuItems, setOpenMenuItems] = useState<OpenMenuItemsState>(() =>
    menuItems.reduce<OpenMenuItemsState>((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {})
  );

  const onNavigate = useCallback(
    (linkTo: string) => {
      navigate(linkTo);
    },
    [navigate]
  );

  const onToggleSubmenu = useCallback((id: string) => {
    setOpenMenuItems(prevState => ({ ...prevState, [id]: !prevState[id] }));
  }, []);

  return (
    <Drawer component="nav" isOpen={isOpen}>
      <Box className="ContentContainer">
        <Box className="HeaderContainer">
          <Box className="LogoContainer">
            <Box className="Logo IncreaseSizeAnimation" component="img" src={Logo} />
          </Box>
          <MenuIcon className="MenuToggleIcon IncreaseSizeAnimation" fontSize="medium" onClick={handleToggleDrawer} />
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
