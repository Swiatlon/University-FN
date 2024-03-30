import './AuthPanel.scss';
import { Box, Button, Typography } from '@mui/material';
import { type SubmitHandler, useForm } from 'react-hook-form';
import AnimatedCircles from '@components/AuthPanelElements/AnimatedCircles/AnimatedCircles';
import FormInput from '@components/FormComponents/FormInput/ReactHookFormInput';

const defaultValues = {
  login: '',
  password: '',
};

interface Inputs {
  login: string;
  password: string;
}

function Login() {
  const { handleSubmit, control } = useForm<Inputs>({ defaultValues }),
    onSubmit: SubmitHandler<Inputs> = data => {
      return data;
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
