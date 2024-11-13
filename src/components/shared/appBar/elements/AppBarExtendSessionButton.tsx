import { Button } from '@mui/material';
import { useRefreshMutation } from 'redux/apiSlices/auth/Auth.Api.Slice';

function AppBarExtendSessionButton() {
  const [refresh] = useRefreshMutation();
  const sessionID = sessionStorage.getItem('sessionUUID');

  const handleExtendSession = async () => {
    await refresh({ sessionID: sessionID! });
  };

  return (
    <Button variant="contained" color="primary" onClick={handleExtendSession} sx={{ marginLeft: 2, marginRight: 2 }}>
      Exetnd Session
    </Button>
  );
}

export default AppBarExtendSessionButton;
