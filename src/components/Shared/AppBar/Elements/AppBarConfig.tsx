import DropdownMenu from 'Components/Shared/DropdownMenu/DropdownMenu';
import LanguageIcon from '@mui/icons-material/Language';
import EnglandCircle from '@assets/icons/EnglandCircle.svg?react';
import PolandCircle from '@assets/icons/PolandCircle.svg?react';
import { useTranslation } from 'react-i18next';
import AppBarTimer from './AppBarTimer';
import { Box } from '@mui/material';

export function useLanguageMenuItems() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return [
    {
      label: t('polish'),
      onClick: () => {
        changeLanguage('pl');
      },
      icon: <PolandCircle />,
    },
    {
      label: t('english'),
      onClick: () => {
        changeLanguage('en');
      },
      icon: <EnglandCircle />,
    },
  ];
}

function AppBarConfig() {
  const { t } = useTranslation();
  const languages = useLanguageMenuItems();

  return (
    <Box className="ConfigAppBar">
      <DropdownMenu label={t('language')} items={languages} startIcon={<LanguageIcon />} hideLabelOnMobile />
      <AppBarTimer />
    </Box>
  );
}

export default AppBarConfig;
