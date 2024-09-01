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
        top: '20%',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          textAlign: 'center',
          maxWidth: '600px',
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
          Welcome to Our Alpha Version!
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#555', lineHeight: 1.6 }}>
          Thank you for using our application. You are currently experiencing an alpha version of the app. This version
          is connected to our backend and database.
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#555', lineHeight: 1.6 }}>
          The primary goal of this project is to enhance our understanding of backend development. We are focused on
          tackling significant challenges, such as managing and processing large volumes of data. As part of this
          process, we are learning how to optimize performance, handle data integrity, and ensure scalability.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Dashboard;
