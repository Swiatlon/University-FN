import { Box, Button, Container, Typography } from '@mui/material';
import { useForm, type SubmitHandler } from 'react-hook-form';
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

interface Inputs {
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
}

const genderOptions = [
  { label: 'Women', value: 'Women' },
  { label: 'Man', value: 'Man' },
];

function CreateStudent() {
  const { handleSubmit, control } = useForm<Inputs>({ defaultValues }),
    [addStudent] = useAddStudentMutation(),
    onSubmit: SubmitHandler<Inputs> = async data => {
      return addStudent(data);
    };

  return (
    <Container className="CreateStudentContainer" maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography className="MaxContentCenter" variant="h4">
          Add Student
        </Typography>
        <FormInput control={control} label="Name" name="name" rules={{ required: true }} variant="filled" />
        <FormInput control={control} label="Surname" name="surname" rules={{ required: true }} variant="filled" />
        <FormDatePicker control={control} label="Birth Date" name="birthDate" rules={{ required: true }} slotProps={{ textField: { variant: 'filled' } }} />
        <FormInput control={control} label="Pesel" name="pesel" rules={{ required: true }} variant="filled" />
        <FormInput control={control} label="Country" name="country" rules={{ required: true }} variant="filled" />
        <FormInput control={control} label="Postal Code" name="postalCode" rules={{ required: true }} variant="filled" />
        <FormInput control={control} label="City" name="city" rules={{ required: true }} variant="filled" />
        <FormInput control={control} label="Street" name="street" rules={{ required: true }} variant="filled" />
        <FormInput control={control} label="Building Number" name="buildingNumber" rules={{ required: true }} variant="filled" />
        <FormInput control={control} label="Apartment Number" name="apartmentNumber" rules={{ required: true }} variant="filled" />
        <FormInput control={control} label="Gender" name="gender" options={genderOptions} rules={{ required: true }} select sx={{ minWidth: '190px' }} variant="filled" />
        <Box className="MaxContentCenter" mt={1}>
          <Button size="large" type="submit" variant="contained">
            Save Student
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default CreateStudent;
