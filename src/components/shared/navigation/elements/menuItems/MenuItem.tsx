import { NavLink } from 'react-router-dom';
import { ListItemButton } from '@mui/material';
import concatClasses from 'classnames';
import { useTypedSelector } from 'Hooks/useStore.Hooks';
import { selectIsDrawerOpen } from 'Redux/StateSlices/View/View.State.Slice';
import MenuItemContent from './MenuItemContent';
import type { IMenuItemProps } from '../../Types/types';

function MenuItemComponent({ item, onToggleSubmenu, isOpen, isChildren }: IMenuItemProps) {
  const isOpenDrawer = useTypedSelector(selectIsDrawerOpen);

  const className = concatClasses('ListItem IncreaseSizeAnimation', {
    ListItemChildren: isChildren,
  });

  const onClick = () => {
    if (!item.linkTo) {
      onToggleSubmenu?.(item.id);
    }
  };

  if (item.linkTo) {
    return (
      <ListItemButton component={NavLink} to={item.linkTo} className={className} onClick={onClick}>
        <MenuItemContent item={item} isOpenDrawer={isOpenDrawer} isOpen={isOpen} />
      </ListItemButton>
    );
  }

  return (
    <ListItemButton className={className} onClick={onClick}>
      <MenuItemContent item={item} isOpenDrawer={isOpenDrawer} isOpen={isOpen} />
    </ListItemButton>
  );
}

export default MenuItemComponent;
