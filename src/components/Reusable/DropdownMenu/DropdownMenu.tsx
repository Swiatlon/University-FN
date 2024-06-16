import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem, Typography, useMediaQuery } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

interface DropdownItem {
  label: string;
  onClick?: () => void;
  icon: React.ReactElement;
  nonClickable?: boolean;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
  startIcon?: React.ReactElement;
  hideLabelOnMobile?: boolean;
}

function DropdownMenu({ label, items, startIcon, hideLabelOnMobile }: DropdownMenuProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isMobile = useMediaQuery('(max-width:600px)');
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
        {hideLabelOnMobile && isMobile ? null : t(selection.label)}
      </Button>
      <Menu id="dropdown-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items.map(item => (
          <MenuItem
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            key={uuidv4()}
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

export default DropdownMenu;
