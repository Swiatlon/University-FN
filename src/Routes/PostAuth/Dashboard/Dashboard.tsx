import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function Dashboard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          textAlign: 'center',
          maxWidth: '500px',
          width: '100%',
          backgroundColor: '#ffffff',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to Our Alpha Version!
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for using our application. You are currently using an alpha version of the app. This version is
          still in development and is connected to our backend and database.
        </Typography>
        <Typography variant="body1" paragraph>
          Due to the extensive work required, this version remains in alpha stage.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Dashboard;
