import { useForm, FormProvider, type SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Button, Paper } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFTextField from 'components/shared/formComponents/textField/RHFTextField';
import LoginAdditionalActions from 'components/viewsComponents/login/elements/LoginAdditionalActions';
import PasswordField from 'components/viewsComponents/login/elements/PasswordField';
import { useLoginMutation } from 'redux/apiSlices/auth/Auth.Api.Slice';
import ExampleUserIcon from 'assets/icons/exampleUserIcon.png';
import { loginValidationSchema } from './schema/Login.Yup';
import './styles/AuthPanel.scss';

const Login = () => {
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
  const onSubmit: SubmitHandler<ILoginFields> = async data => {
    const { login, password, rememberMe } = data;

    await loginUser({
      identifier: login,
      password,
      rememberMe,
    });
  };

  return (
    <FormProvider {...methods}>
      <Paper className="LoginForm" component="form" onSubmit={methods.handleSubmit(onSubmit)}>
        <Box component="img" src={ExampleUserIcon} sx={{ width: '86px' }} />
        <Typography variant="h4" color="primary">
          {t('Login Form')}
        </Typography>
        <RHFTextField name="login" label={t('Username')} fullWidth data-cy="username" />
        <PasswordField name="password" label={t('Password')} data-cy="password" />
        <LoginAdditionalActions />
        <Button fullWidth size="large" type="submit" variant="contained" data-cy="submitLogin">
          {t('login')}
        </Button>
      </Paper>
    </FormProvider>
  );
};

export default Login;

export interface ILoginFields {
  login: string;
  password: string;
  rememberMe: boolean;
}
