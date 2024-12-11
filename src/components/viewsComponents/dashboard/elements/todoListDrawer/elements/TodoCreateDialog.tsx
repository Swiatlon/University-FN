import { useForm, FormProvider } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import randomColor from 'randomcolor';
import { selectId } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import { useCreateStudentTodoMutation } from 'redux/apiSlices/students/Students.Api.Slice';
import { schema, type ICreateTodoFormData } from '../schemas/TodoDialog.Schema';
import ColorPickerField from './ColorPickerField';
import DescriptionField from './DescriptionField';
import EndDateField from './EndDateField';
import TitleField from './TitleField';

interface ITodoDialogProps {
  open: boolean;
  onClose: () => void;
}

const TodoCreateDialog = ({ open, onClose }: ITodoDialogProps) => {
  const student = Number(useSelector(selectId));
  const [createStudentTodo] = useCreateStudentTodoMutation();

  const methods = useForm<ICreateTodoFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      description: '',
      endDate: new Date(),
      color: randomColor(),
    },
  });

  const { handleSubmit, reset } = methods;

  const submitForm = (data: ICreateTodoFormData) => {
    createStudentTodo({
      ...data,
      student,
    });
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add New Todo</DialogTitle>
      <DialogContent>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(submitForm)} style={{ display: 'grid', gap: '16px', marginTop: '16px' }}>
            <TitleField />
            <DescriptionField />
            <EndDateField />
            <ColorPickerField />
            <DialogActions>
              <Button onClick={onClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Add
              </Button>
            </DialogActions>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default TodoCreateDialog;
