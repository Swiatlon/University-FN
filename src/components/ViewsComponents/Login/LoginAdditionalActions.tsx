import { Box, Typography } from '@mui/material';
import { t } from 'i18next';
import RHFCheckbox from 'Components/Shared/FormComponents/Checkbox/RHFCheckbox';

function LoginAdditionalActions() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
      <RHFCheckbox name="rememberMe" label={t('Remember Me')} />
      <Typography color="primary" variant="body2" sx={{ cursor: 'pointer' }}>
        Forgot password?
      </Typography>
    </Box>
  );
}

export default LoginAdditionalActions;
