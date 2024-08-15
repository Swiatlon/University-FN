import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Button, TextField } from '@mui/material';
import { useLoginMutation } from 'Redux/ApiSlices/Auth/Auth.Api.Slice';
import AnimatedCircles from 'Components/DEPRECATED/AnimatedCircles/AnimatedCircles';
import './AuthPanel.scss';

const defaultValues = {
  login: '',
  password: '',
};

interface IInputs {
  login: string;
  password: string;
}

function Login() {
  const { t } = useTranslation();
  const [loginUser] = useLoginMutation();
  const { handleSubmit, control } = useForm<IInputs>({ defaultValues });

  const onSubmit: SubmitHandler<IInputs> = async data => {
    const { login, password } = data;
    await loginUser({ identifier: login, password });
  };

  return (
    <Box className="Container">
      <AnimatedCircles />
      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <Typography className="MaxContentCenter" variant="h4">
          {t('login_form')}
        </Typography>

        <Controller
          name="login"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label={t('login')}
              variant="outlined"
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error ? t('login_required') : null}
              margin="normal"
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label={t('password')}
              type="password"
              variant="outlined"
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error ? t('password_required') : null}
              margin="normal"
            />
          )}
        />

        <Box className="MaxContentCenter" mt={1}>
          <Button size="large" type="submit" variant="contained">
            {t('login_action')}
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Login;
