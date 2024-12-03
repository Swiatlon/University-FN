import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton, Tooltip } from '@mui/material';
import FullScreenLoader from 'components/shared/fullScreenLoader/FullScreenLoader';
import { useRefreshMutation } from 'redux/apiSlices/auth/Auth.Api.Slice';

interface IAppBarExtSessionIconProps {
  timerColor: string;
}

function AppBarExtSessionIcon({ timerColor }: IAppBarExtSessionIconProps) {
  const [refresh, { isLoading }] = useRefreshMutation();
  const handleExtendSession = async () => {
    await refresh();
  };

  return (
    <>
      {isLoading ? <FullScreenLoader /> : null}
      <Tooltip title="Extend Session" placement="bottom">
        <span>
          <IconButton onClick={handleExtendSession} color="primary" disabled={isLoading} size="large">
            <RefreshIcon sx={{ color: timerColor }} />
          </IconButton>
        </span>
      </Tooltip>
    </>
  );
}

export default AppBarExtSessionIcon;
