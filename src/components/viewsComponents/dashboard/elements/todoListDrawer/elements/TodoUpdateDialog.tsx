import { useForm, FormProvider } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { selectId } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import { useUpdateStudentTodoMutation } from 'redux/apiSlices/students/Students.Api.Slice';
import { schema, type ICreateTodoFormData } from '../schemas/TodoDialog.Schema';
import ColorPickerField from './ColorPickerField';
import DescriptionField from './DescriptionField';
import EndDateField from './EndDateField';
import TitleField from './TitleField';
import type { IStudentTodo } from 'contract/interfaces/persons/Persons';

interface ITodoDialogProps {
  open: boolean;
  onClose: () => void;
  todo: IStudentTodo;
}

const TodoUpdateDialog = ({ open, onClose, todo }: ITodoDialogProps) => {
  const student = Number(useSelector(selectId));
  const [updateStudentTodo] = useUpdateStudentTodoMutation();

  const methods = useForm<ICreateTodoFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: todo.title,
      description: todo.description,
      endDate: new Date(todo.endDate),
      color: todo.color,
    },
  });

  const { handleSubmit, reset } = methods;
  const submitForm = (data: ICreateTodoFormData) => {
    updateStudentTodo({
      updatedTodo: data,
      student,
      id: todo.id,
    });
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Todo</DialogTitle>
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
                Update
              </Button>
            </DialogActions>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default TodoUpdateDialog;
