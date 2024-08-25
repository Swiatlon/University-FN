import { useForm, FormProvider, type SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Button, Paper } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginMutation } from 'Redux/ApiSlices/Auth/Auth.Api.Slice';
import ExampleUserIcon from '@assets/Icons/exampleUserIcon.png';
import RHFTextField from 'Components/Shared/FormComponents/TextField/RHFTextField';
import LoginAdditionalActions from 'Components/ViewsComponents/Login/LoginAdditionalActions';
import PasswordField from 'Components/ViewsComponents/Login/PasswordField';
import { loginValidationSchema } from './Login.Yup';
import type { ILoginFields } from './Types/Login.Types';
import './Styles/AuthPanel.scss';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const [loginUser] = useLoginMutation();

  const methods = useForm<ILoginFields>({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      login: '',
      password: '',
      rememberMe: false,
    },
  });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<ILoginFields> = async data => {
    const sessionUUID = sessionStorage.getItem('sessionUUID')!;
    const { login, password, rememberMe } = data;

    await loginUser({
      identifier: login,
      password,
      rememberMe,
      sessionID: sessionUUID,
    });
  };

  return (
    <FormProvider {...methods}>
      <Paper className="Container" component="form" onSubmit={handleSubmit(onSubmit)}>
        <Box component="img" src={ExampleUserIcon} sx={{ width: '96px', mb: 2 }} />
        <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
          {t('Login Form')}
        </Typography>
        <RHFTextField name="login" label={t('Username')} fullWidth sx={{ mb: 4 }} />
        <PasswordField name="password" label={t('Password')} sx={{ mb: 3 }} />
        <LoginAdditionalActions />
        <Button fullWidth size="large" type="submit" variant="contained">
          {t('login')}
        </Button>
      </Paper>
    </FormProvider>
  );
};

export default Login;
