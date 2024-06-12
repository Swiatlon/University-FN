import DropdownMenu from '@components/Reusable/DropdownMenu/DropdownMenu';
import LanguageIcon from '@mui/icons-material/Language';
import EnglandCircle from '@assets/icons/EnglandCircle.svg?react';
import PolandCircle from '@assets/icons/PolandCircle.svg?react';
import { useTranslation } from 'react-i18next';
import Timer from './Timer';
import { Box } from '@mui/material';

function ConfigAppBar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const languages = [
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
  return (
    <Box sx={{ ml: 'auto', display: 'flex', gap: 6 }}>
      <DropdownMenu label={t('language')} items={languages} startIcon={<LanguageIcon />} />
      <Timer />
    </Box>
  );
}

export default ConfigAppBar;
