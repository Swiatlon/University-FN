import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface IArrowIconProps {
  isOpen: boolean;
}

const MenuArrowIcon = ({ isOpen }: IArrowIconProps) => {
  return isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />;
};

export default MenuArrowIcon;
