import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useLoginMutation } from 'Redux/Slices/auth/authApiSlice';
import AnimatedCircles from 'Components/AuthPanelElements/AnimatedCircles/AnimatedCircles';
import FormInput from 'Components/FormComponents/FormInput/ReactHookFormInput';
import './AuthPanel.scss';

//TODO: FIX THIS ESLINT + TYPESCRIPT

const defaultValues = {
  login: '',
  password: '',
};

interface Inputs {
  login: string;
  password: string;
}

function Login() {
  const { t } = useTranslation();
  const [loginUser] = useLoginMutation();
  const { handleSubmit, control } = useForm<Inputs>({ defaultValues });

  const onSubmit: SubmitHandler<Inputs> = async data => {
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
        <FormInput control={control} label="Login" name="login" rules={{ required: true }} variant="outlined" />
        <FormInput control={control} label="Password" name="password" rules={{ required: true }} type="password" variant="outlined" />
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
