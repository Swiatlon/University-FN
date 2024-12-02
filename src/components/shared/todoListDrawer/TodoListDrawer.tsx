import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, Tooltip, Box, Typography, Button, useMediaQuery } from '@mui/material';
import { selectId } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import { useGetStudentTodosQuery } from 'redux/apiSlices/students/Students.Api.Slice';
import TaskCard from './elements/TaskCard';
import TodoCreateDialog from './elements/TodoCreateDialog';

const TodoListDrawer: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 500px)');
  const studentId = useSelector(selectId)!;
  const drawerWidth = isMobile ? 280 : 450;
  const [openDrawer, setOpenDrawer] = useState<boolean>(true);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { data: tasks } = useGetStudentTodosQuery({ studentId }, { skip: !studentId });

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const toggleDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <Box>
      <Drawer
        anchor="right"
        open={openDrawer}
        variant="persistent"
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            mt: 'auto',
            height: 'calc(100vh - 80px)',
            bottom: 0,
            boxSizing: 'border-box',
            borderTop: '1px solid rgba(0, 0, 0, 0.05)',
          },
        }}
      >
        <Box sx={{ px: 4, py: 3 }}>
          <Typography variant="h5">Todo List</Typography>
          {tasks?.map(task => <TaskCard key={task.id} task={task} />)}
        </Box>
        <Box sx={{ position: 'fixed', bottom: 0, background: 'white', width: '100%', py: 2 }}>
          <Button variant="contained" onClick={toggleDialog} sx={{ mx: 4 }}>
            Add New Task
          </Button>
        </Box>
      </Drawer>

      <Box
        sx={{
          position: 'fixed',
          top: '30%',
          right: openDrawer ? drawerWidth : 0,
          zIndex: 1202,
          background: 'white',
          border: '1px solid #ddd',
          borderRadius: '50%',
          boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
          transform: 'translateX(50%)',
          transition: 'right 0.25s cubic-bezier(0, 0, 0.2, 1), transform 0.25s cubic-bezier(0, 0, 0.2, 1)',
        }}
      >
        <Tooltip title={openDrawer ? 'Close Todo List' : 'Open Todo List'}>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <TodoCreateDialog open={openDialog} onClose={toggleDialog} />
    </Box>
  );
};

export default TodoListDrawer;
