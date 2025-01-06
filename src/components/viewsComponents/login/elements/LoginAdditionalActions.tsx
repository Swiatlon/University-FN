import { Box, Typography } from '@mui/material';
import RHFCheckbox from 'components/shared/formComponents/checkbox/RHFCheckbox';
import { t } from 'i18next';
import { useRandomLoginMutation } from 'redux/apiSlices/auth/Auth.Api.Slice';

function LoginAdditionalActions() {
  const [randomLogin] = useRandomLoginMutation();

  const handleRandomLogin = async () => {
    await randomLogin().unwrap();
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <RHFCheckbox name="rememberMe" label={t('Remember Me')} />
      <Typography
        color="primary"
        variant="body2"
        sx={{ cursor: 'pointer' }}
        onClick={handleRandomLogin}
        data-cy="randomLogin"
      >
        login as random
      </Typography>
    </Box>
  );
}

export default LoginAdditionalActions;
