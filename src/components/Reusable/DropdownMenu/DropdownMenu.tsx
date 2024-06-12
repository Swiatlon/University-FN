import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

interface DropdownItem {
  label: string;
  onClick: () => void;
  icon: React.ReactElement;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
  startIcon?: React.ReactElement;
}

function DropdownMenu({ label, items, startIcon }: DropdownMenuProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [selection, setSelection] = useState({
    label,
    icon: startIcon,
  });

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ m: 1 }} key={currentLanguage}>
      <Button onClick={handleClick} startIcon={selection.icon}>
        {t(selection.label)}
      </Button>
      <Menu id="dropdown-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items.map(item => (
          <MenuItem
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            key={uuidv4()}
            onClick={() => {
              item.onClick();
              setSelection({ label: item.label, icon: item.icon });
              handleClose();
            }}
          >
            {item.icon}
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default DropdownMenu;
