import { Container, Box, Button, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import './CreatePatient.scss';
import FormInput from '@components/FormComponents/FormInput/ReactHookFormInput';
import FormSelect from '@components/FormComponents/FormSelect/ReactHookFormSelect';

const defaultValues = {
  firstName: '',
  lastName: '',
  address: '',
  country: '',
  phone: '',
  email: '',
  pesel: '',
  birthDate: '' as const,
  gender: '' as '' | 'Male' | 'Female',
  doctor: '',
};

type Inputs = {
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  phone: string;
  email: string;
  pesel: string;
  birthDate: Date | '';
  gender: 'Male' | 'Female' | '';
  doctor: string;
};

const options = [
  { label: 'Ten', value: 'Ten' },
  { label: 'Twenty', value: 'Twenty' },
  { label: 'Thirty', value: 'Thirdy' },
];

function CreatePatient() {
  const { handleSubmit, control } = useForm<Inputs>({ defaultValues });
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  // prettier-ignore
  return (
    <Container maxWidth="sm" className="CreatePatientContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" className="MaxContentCenter">
          Add Patient
        </Typography>
        <FormInput control={control} name="firstName" label="First Name" rules={{ required: true }} variant="filled" />
        <FormInput control={control} name="lastName"  label="Last Name"  rules={{ required: true }} variant="filled" />
        <FormInput control={control} name="address"   label="Address"    rules={{ required: true }} variant="filled" />
        <FormInput control={control} name="country"   label="Country"    rules={{ required: true }} variant="filled" />
        <FormInput control={control} name="phone"     label="Phone"      rules={{ required: true }} variant="filled" />
        <FormInput control={control} name="email"     label="Email"      rules={{ required: true }} variant="filled" />
        <FormInput control={control} name="birthDate" label="Birth Date" rules={{ required: true }} variant="filled" />
        <FormInput control={control} name="gender"    label="Gender"     rules={{ required: true }} variant="filled" />
        <FormInput control={control} name="pesel"     label="Pesel"      rules={{ required: true }} variant="filled" />
        <FormInput control={control} name="doctor"    label="Doctor"     rules={{ required: true }} variant='filled' select options={options} sx={{ minWidth: "190px" }} />
        <Box className="MaxContentCenter" mt={1}>
          <Button type="submit" size="large" variant="contained">
            Save Patient
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default CreatePatient;
