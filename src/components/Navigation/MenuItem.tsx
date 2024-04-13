import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useLocation } from 'react-router-dom';
import type { MenuItemProps } from './types';

const useIsActive = (path: string | undefined) => {
  const location = useLocation();
  return location.pathname === path;
};

function MenuItemComponent({ item, onToggleSubmenu, onNavigate, isOpen }: MenuItemProps) {
  const isActive = useIsActive(item.linkTo);

  const onClick = () => {
    if (item.linkTo) {
      onNavigate(item.linkTo);
      return;
    }

    onToggleSubmenu?.(item.id);
  };

  const renderArrowIcon = () => {
    if (item.children) {
      return isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />;
    }
    return null;
  };

  return (
    <ListItemButton className={`ListItem ${isActive ? 'active' : ''} ${item.linkTo ? 'IncreaseSizeAnimation' : ''}`} onClick={onClick}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.text} />
      {renderArrowIcon()}
    </ListItemButton>
  );
}

export default MenuItemComponent;
