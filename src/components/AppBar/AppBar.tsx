import { selectTokenExpirationTime } from '@features/auth/authSlice';
import { parseISO, intervalToDuration, isAfter } from 'date-fns';
import { Box, Typography } from '@mui/material';
import { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSendLogoutMutation } from '@features/auth/authApiSlice';
import DropdownMenu from '@components/Reusable/DropdownMenu/DropdownMenu';
import LanguageIcon from '@mui/icons-material/Language';
import EnglandCircle from '@assets/icons/EnglandCircle.svg?react';
import PolandCircle from '@assets/icons/PolandCircle.svg?react';
import { useTranslation } from 'react-i18next';

function AppBar() {
  const { t, i18n } = useTranslation();
  const [sendLogout] = useSendLogoutMutation();
  const tokenExpirationTime = useSelector(selectTokenExpirationTime);
  const [timeLeft, setTimeLeft] = useState('');

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const languages = [
    {
      label: 'Polski',
      onClick: () => {
        changeLanguage('pl');
      },
      icon: <PolandCircle />,
    },
    {
      label: 'Angielski',
      onClick: () => {
        changeLanguage('en');
      },
      icon: <EnglandCircle />,
    },
  ];
  useLayoutEffect(() => {
    const updateTimer = async () => {
      const now = new Date();
      const expirationDate = parseISO(tokenExpirationTime!);
      if (isAfter(now, expirationDate)) {
        clearInterval(timerId);
        await sendLogout();
        return;
      }
      const duration = intervalToDuration({ start: now, end: expirationDate });

      const minutes = duration.minutes?.toString().padStart(2, '0');
      const seconds = duration.seconds?.toString().padStart(2, '0');
      const formatted = `${minutes}:${seconds}`;

      setTimeLeft(formatted);
    };

    const timerId = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [tokenExpirationTime]);

  return (
    <Box
      sx={{
        width: '100%',
        height: '80px',
        position: 'sticky',
        background: 'white',
        top: 0,
        zIndex: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', alignContent: 'center', mx: 6, height: '100%' }}>
        <Typography variant="h5">Personal Data</Typography>
        <Box sx={{ ml: 'auto', display: 'flex', gap: 6 }}>
          <DropdownMenu label={t('language')} items={languages} startIcon={<LanguageIcon />} />
          <Typography variant="body1" sx={{ m: 'auto' }}>{`Timer: ${timeLeft}`}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AppBar;
