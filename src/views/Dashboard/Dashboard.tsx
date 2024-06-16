import React from 'react';
import { StyledBox } from '@components/Reusable/Box/Styled.Box';
import { Box } from '@mui/material';

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Box sx={{ display: 'flex', gap: ' 24px', my: 4, mx: 4, flexWrap: 'wrap' }}>
        <StyledBox sx={{ width: '300px', height: '300px' }}>ABC</StyledBox>
      </Box>
    </>
  );
}

export default Dashboard;
