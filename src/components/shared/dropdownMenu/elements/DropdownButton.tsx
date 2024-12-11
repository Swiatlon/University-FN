import { ReactElement, cloneElement, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, type ButtonProps, useMediaQuery } from '@mui/material';

interface DropdownButtonProps {
  customButton?: ReactElement;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  selection: { label: string; icon?: ReactElement };
  buttonVariant?: ButtonProps['variant'];
  hideLabelOnMobile?: boolean;
}

const DropdownButton = ({
  customButton,
  handleClick,
  selection,
  buttonVariant = 'outlined',
  hideLabelOnMobile = false,
}: DropdownButtonProps) => {
  const { t } = useTranslation();
  const isMenuFullWidth = useMediaQuery('(max-width:910px)');
  const { label, icon } = selection;

  return customButton ? (
    cloneElement(customButton, { onClick: handleClick })
  ) : (
    <Button onClick={handleClick} startIcon={icon} variant={buttonVariant}>
      {hideLabelOnMobile && isMenuFullWidth ? null : t(label)}
    </Button>
  );
};

export default DropdownButton;
