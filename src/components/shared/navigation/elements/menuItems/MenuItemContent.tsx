import { Fade, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material';
import MenuItemArrowIcon from './MenuItemArrowIcon';
import type { IMenuItem } from '../../types/types';

interface IListItemContentProps {
  item: IMenuItem;
  isOpenDrawer: boolean;
  isOpen?: boolean;
}

const MenuItemContent = ({ item, isOpenDrawer, isOpen }: IListItemContentProps) => (
  <>
    <Tooltip
      placement="right"
      arrow
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      title={
        isOpenDrawer ? null : (
          <Typography variant="body2" fontSize="0.80rem">
            {item.text}
          </Typography>
        )
      }
    >
      <ListItemIcon>{item.icon}</ListItemIcon>
    </Tooltip>
    <ListItemText primary={item.text} />
    {item.children && item.children.length > 0 ? <MenuItemArrowIcon isOpen={isOpen!} /> : null}
  </>
);

export default MenuItemContent;
