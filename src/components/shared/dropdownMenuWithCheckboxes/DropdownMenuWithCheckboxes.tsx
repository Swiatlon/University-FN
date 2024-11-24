import React, { useState } from 'react';
import { Checkbox, FormControlLabel, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';

export interface ICheckboxDropdownItem {
  identifier: string;
  checked: boolean;
  icon?: React.ReactElement;
  label: string;
}

interface IDropDownMenuWithCheckboxesProps {
  label?: string;
  tooltipLabel?: string;
  items: ICheckboxDropdownItem[];
  startIcon?: React.ReactElement;
  setItems: React.Dispatch<React.SetStateAction<ICheckboxDropdownItem[]>>;
  onCheckboxChange?: (identifier: string, checked: boolean) => void;
}

function DropDownMenuWithCheckboxes({
  label,
  tooltipLabel,
  items,
  startIcon,
  setItems,
  onCheckboxChange,
}: IDropDownMenuWithCheckboxesProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCheckboxChange = (checkboxIdentifier: string) => {
    const itemIndex = items.findIndex(item => item.identifier === checkboxIdentifier);

    if (itemIndex === -1) {
      return;
    }

    const updatedCheckedState = !items[itemIndex]!.checked;

    onCheckboxChange?.(checkboxIdentifier, updatedCheckedState);
    setItems(prevItems =>
      prevItems.map((item, index) => (index === itemIndex ? { ...item, checked: updatedCheckedState } : item))
    );
  };

  return (
    <>
      <Tooltip title={tooltipLabel ?? ''}>
        <IconButton
          onClick={handleClick}
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          size="small"
          color="primary"
        >
          {startIcon}
          {label ? <Typography variant="body1">{label}</Typography> : null}
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items.map(item => (
          <MenuItem key={item.identifier} sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 0 }}>
            {item.icon}
            <FormControlLabel
              label={item.label}
              sx={{ width: '100%', p: 1, m: 0 }}
              control={
                <Checkbox
                  size="small"
                  checked={item.checked}
                  onClick={e => {
                    e.stopPropagation();
                    handleCheckboxChange(item.identifier);
                  }}
                />
              }
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default DropDownMenuWithCheckboxes;
