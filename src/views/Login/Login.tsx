import { Box, Typography, Button } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import AnimatedCircles from '@components/AuthPanelElements/AnimatedCircles/AnimatedCircles';
import FormInput from '@components/FormComponents/FormInput/ReactHookFormInput';
import './AuthPanel.scss';

const defaultValues = {
  login: '',
  password: '',
};

type Inputs = {
  login: string;
  password: string;
};

function Login() {
  const { handleSubmit, control } = useForm<Inputs>({ defaultValues });
  const onSubmit: SubmitHandler<Inputs> = data => {
    return data;
  };

  return (
    <Box className="Container">
      <AnimatedCircles />
      <form onSubmit={handleSubmit(onSubmit)} className="Form">
        <Typography variant="h4" className="MaxContentCenter">
          Login Form
        </Typography>
        <FormInput control={control} name="login" label="Login" variant="outlined" rules={{ required: true }} />
        <FormInput control={control} name="password" label="Password" variant="outlined" rules={{ required: true }} type="password" />
        <Box className="MaxContentCenter" mt={1}>
          <Button type="submit" size="large" variant="contained">
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Login;
