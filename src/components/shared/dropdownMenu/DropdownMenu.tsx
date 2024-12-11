import { useState, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, ButtonProps, Menu, MenuItem, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import DropdownButton from './elements/DropdownButton';

interface IDropdownItem {
  label: string;
  onClick?: () => void;
  icon: ReactElement;
  nonClickable?: boolean;
}

interface IDropdownMenuProps {
  label: string;
  items: IDropdownItem[];
  startIcon?: ReactElement;
  hideLabelOnMobile?: boolean;
  buttonVariant?: ButtonProps['variant'];
  customButton?: ReactElement;
}

function DropdownMenu({
  label,
  items,
  startIcon,
  hideLabelOnMobile,
  buttonVariant = 'outlined',
  customButton,
}: IDropdownMenuProps) {
  const { i18n } = useTranslation();
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
      <DropdownButton
        customButton={customButton}
        handleClick={handleClick}
        selection={selection}
        buttonVariant={buttonVariant}
        hideLabelOnMobile={hideLabelOnMobile}
      />

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
