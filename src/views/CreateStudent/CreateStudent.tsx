import { Container, Box, Button, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import './CreateStudent.scss';
import FormInput from '@components/FormComponents/FormInput/ReactHookFormInput';
import FormDatePicker from '@components/FormComponents/FormDatePicker/ReactHookFormDatePicker';
import { useAddStudentMutation } from '@features/students/studentsSlice';

const defaultValues = {
  name: '',
  surname: '',
  birthDate: '' as const,
  pesel: '',
  country: '',
  city: '',
  postalCode: '',
  street: '',
  buildingNumber: '',
  apartmentNumber: '',
  gender: '',
};

type Inputs = {
  name: string;
  surname: string;
  birthDate: Date | '';
  pesel: string;
  country: string;
  city: string;
  postalCode: string;
  street: string;
  buildingNumber: string;
  apartmentNumber: string;
  gender: string;
};

const genderOptions = [
  { label: 'Women', value: 'Women' },
  { label: 'Man', value: 'Man' },
];

function CreateStudent() {
  const { handleSubmit, control } = useForm<Inputs>({ defaultValues });
  const [addStudent] = useAddStudentMutation();
  const onSubmit: SubmitHandler<Inputs> = data => {
    addStudent(data);
  };

  return (
    <Container maxWidth="sm" className="CreateStudentContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" className="MaxContentCenter">
          Add Student
        </Typography>
        <FormInput control={control} name="name" label="Name" variant="filled" rules={{ required: true }} />
        <FormInput control={control} name="surname" label="Surname" variant="filled" rules={{ required: true }} />
        <FormDatePicker control={control} name="birthDate" label="Birth Date" slotProps={{ textField: { variant: 'filled' } }} rules={{ required: true }} />
        <FormInput control={control} name="pesel" label="Pesel" variant="filled" rules={{ required: true }} />
        <FormInput control={control} name="country" label="Country" variant="filled" rules={{ required: true }} />
        <FormInput control={control} name="postalCode" label="Postal Code" variant="filled" rules={{ required: true }} />
        <FormInput control={control} name="city" label="City" variant="filled" rules={{ required: true }} />
        <FormInput control={control} name="street" label="Street" variant="filled" rules={{ required: true }} />
        <FormInput control={control} name="buildingNumber" label="Building Number" variant="filled" rules={{ required: true }} />
        <FormInput control={control} name="apartmentNumber" label="Apartment Number" variant="filled" rules={{ required: true }} />
        <FormInput control={control} name="gender" label="Gender" variant="filled" rules={{ required: true }} select options={genderOptions} sx={{ minWidth: '190px' }} />
        <Box className="MaxContentCenter" mt={1}>
          <Button type="submit" size="large" variant="contained">
            Save Student
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default CreateStudent;
