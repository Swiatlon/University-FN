import { useState, MouseEvent } from 'react';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';

interface IDropdownItem {
  label: string;
  onClick?: () => void;
  icon: React.ReactElement;
  nonClickable?: boolean;
}

interface IDropdownMenuProps {
  label: string;
  items: IDropdownItem[];
  startIcon?: React.ReactElement;
}

function DropdownMenuWithSelection({ label, items, startIcon }: IDropdownMenuProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selection, setSelection] = useState({
    label,
    icon: startIcon,
  });
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button onClick={handleClick} startIcon={selection.icon} data-testid="selection">
        {selection.label}
      </Button>
      <Menu id="dropdown-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items.map(item => (
          <MenuItem
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            key={item.label}
            onClick={() => {
              if (!item.nonClickable) {
                item.onClick?.();
                setSelection({ label: item.label, icon: item.icon });
                handleClose();
              }
            }}
          >
            {item.icon}
            {item.nonClickable ? <Typography>{item.label}</Typography> : item.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default DropdownMenuWithSelection;
