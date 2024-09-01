import { Box, Typography } from '@mui/material';
import { t } from 'i18next';
import { useRandomLoginMutation } from 'Redux/ApiSlices/Auth/Auth.Api.Slice';
import RHFCheckbox from 'Components/Shared/FormComponents/Checkbox/RHFCheckbox';

function LoginAdditionalActions() {
  const sessionUUID = sessionStorage.getItem('sessionUUID')!;
  const [randomLogin] = useRandomLoginMutation();

  const handleRandomLogin = async () => {
    await randomLogin({ sessionID: sessionUUID }).unwrap();
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
      <RHFCheckbox name="rememberMe" label={t('Remember Me')} />
      <Typography color="primary" variant="body2" sx={{ cursor: 'pointer' }} onClick={handleRandomLogin}>
        login as random account
      </Typography>
    </Box>
  );
}

export default LoginAdditionalActions;
