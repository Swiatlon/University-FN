import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface ArrowIconProps {
  isOpen: boolean;
}

const MenuArrowIcon = ({ isOpen }: ArrowIconProps) => {
  return isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />;
};

export default MenuArrowIcon;
