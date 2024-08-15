import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Collapse, Divider, List } from '@mui/material';
import { useTypedSelector } from 'Hooks/useStore.Hooks';
import { selectCurrentToken, selectUserRoles } from 'Redux/StateSlices/Auth/Auth.State.Slice';
import { selectIsDrawerOpen, toggleDrawer } from 'Redux/StateSlices/View/View.State.Slice';
import Logo from '@assets/images/Logo.png';
import UserProfile from './Elements/HeaderItems/UserProfile';
import MenuItemComponent from './Elements/MenuItems/MenuItem';
import { Drawer } from './Styled';
import type { OpenMenuItemsStateType, INavigationProps } from './Types/types';

function Navigation({ menuItems }: INavigationProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useTypedSelector(selectCurrentToken);
  const isOpen = useTypedSelector(selectIsDrawerOpen);
  const userRoles = useTypedSelector(selectUserRoles);

  const handleToggleDrawer = () => {
    dispatch(toggleDrawer());
  };

  const [openMenuItems, setOpenMenuItems] = useState<OpenMenuItemsStateType>(() =>
    menuItems.reduce<OpenMenuItemsStateType>((acc, item) => {
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
          {menuItems.map(item => {
            if (userRoles.some(role => item.notAvailableForRoles?.includes(role))) {
              return null;
            }

            return (
              <Box key={item.id}>
                <MenuItemComponent isOpen={openMenuItems[item.id]} item={item} onNavigate={onNavigate} onToggleSubmenu={item.children ? onToggleSubmenu : undefined} />
                {item.children ? (
                  <Collapse in={openMenuItems[item.id]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map(subItem => {
                        if (userRoles.some(role => subItem.notAvailableForRoles?.includes(role))) {
                          return null;
                        }

                        return <MenuItemComponent isChildren item={subItem} key={subItem.id} onNavigate={onNavigate} />;
                      })}
                    </List>
                  </Collapse>
                ) : null}
              </Box>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}

export default Navigation;
