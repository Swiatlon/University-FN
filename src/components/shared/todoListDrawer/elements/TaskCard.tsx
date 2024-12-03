import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Card, Box, Typography, IconButton } from '@mui/material';
import DropdownMenu from 'components/shared/dropdownMenu/DropdownMenu';
import { format } from 'date-fns';
import { useSnackbar } from 'notistack';
import { useDeleteStudentTodoMutation } from 'redux/apiSlices/students/Students.Api.Slice';
import TodoUpdateDialog from './TodoUpdateDialog';
import type { IStudentTodo } from 'contract/interfaces/persons/Persons';

interface ITaskCardProps {
  task: IStudentTodo;
}

export const TaskCard: React.FC<ITaskCardProps> = ({ task: { title, description, endDate, color, student, id } }) => {
  const [deleteStudentTodo] = useDeleteStudentTodoMutation();
  const { enqueueSnackbar } = useSnackbar();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<IStudentTodo | null>(null);

  const handleDelete = async () => {
    try {
      await deleteStudentTodo({ studentId: student, todoId: id }).unwrap();
      enqueueSnackbar('Todo deleted successfully!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Failed to delete the todo.', { variant: 'error' });
    }
  };

  const handleEdit = () => {
    setSelectedTask({ title, description, endDate, color, student, id });
    setIsDialogOpen(true);
  };

  const items = [
    {
      label: 'Edit',
      icon: <EditIcon fontSize="small" color="primary" />,
      onClick: handleEdit,
    },
    {
      label: 'Delete',
      icon: <DeleteIcon fontSize="small" color="primary" />,
      onClick: handleDelete,
    },
  ];

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          borderLeft: `5px solid ${color}`,
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          my: 3,
        }}
      >
        <Box>
          <Typography variant="body1" fontWeight="bold" sx={{ mb: 0.5 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
            {description}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {format(new Date(endDate), 'EEEE, MMMM d, yyyy h:mm:ss a')}
          </Typography>
        </Box>
        <DropdownMenu
          label=""
          items={items}
          customButton={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
      </Card>
      {isDialogOpen ? (
        <TodoUpdateDialog
          open={isDialogOpen}
          onClose={() => {
            setIsDialogOpen(false);
          }}
          todo={selectedTask!}
        />
      ) : null}
    </>
  );
};

export default TaskCard;
