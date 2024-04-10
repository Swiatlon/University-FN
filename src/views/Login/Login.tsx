import { Box, Typography, Button } from '@mui/material';
import { type SubmitHandler, useForm } from 'react-hook-form';
import AnimatedCircles from '@components/AuthPanelElements/AnimatedCircles/AnimatedCircles';
import FormInput from '@components/FormComponents/FormInput/ReactHookFormInput';
import './AuthPanel.scss';
import { useLoginMutation } from '@features/auth/authApiSlice';
import { setCredentials } from '@features/auth/authSlice';
import { useDispatch } from 'react-redux';
/* eslint-disable */

const defaultValues = {
  login: '',
  password: '',
};

interface Inputs {
  login: string;
  password: string;
}

function Login() {
  const dispatch = useDispatch();
  const [loginUser] = useLoginMutation();
  const { handleSubmit, control } = useForm<Inputs>({ defaultValues });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const { login, password } = data;
    const { accessToken } = await loginUser({ identifier: login, password }).unwrap();
    // @ts-ignore
    dispatch(setCredentials({ accessToken }));
  };

  return (
    <Box className="Container">
      <AnimatedCircles />
      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <Typography className="MaxContentCenter" variant="h4">
          Login Form
        </Typography>
        <FormInput control={control} label="Login" name="login" rules={{ required: true }} variant="outlined" />
        <FormInput control={control} label="Password" name="password" rules={{ required: true }} type="password" variant="outlined" />
        <Box className="MaxContentCenter" mt={1}>
          <Button size="large" type="submit" variant="contained">
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Login;
