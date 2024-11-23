import { useMemo } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import { CircularProgress, IconButton, Tooltip } from '@mui/material';
import { useRefreshMutation } from 'redux/apiSlices/auth/Auth.Api.Slice';

interface IAppBarExtSessionIconProps {
  timerColor: string;
}

function AppBarExtSessionIcon({ timerColor }: IAppBarExtSessionIconProps) {
  const [refresh, { isLoading }] = useRefreshMutation();

  const handleExtendSession = async () => {
    const sessionID = sessionStorage.getItem('sessionUUID');
    if (sessionID) {
      await refresh({ sessionID });
    }
  };

  const iconColor = useMemo(() => {
    switch (timerColor) {
      case '#f70000':
        return '#f70000';
      case '#ff9800':
        return '#ff9800';
      default:
        return 'black';
    }
  }, [timerColor]);

  return (
    <Tooltip title="Extend Session" placement="bottom">
      <span>
        <IconButton onClick={handleExtendSession} color="primary" disabled={isLoading} size="large">
          {isLoading ? <CircularProgress size={24} /> : <RefreshIcon sx={{ color: iconColor, fontSize: '24px' }} />}
        </IconButton>
      </span>
    </Tooltip>
  );
}

export default AppBarExtSessionIcon;
