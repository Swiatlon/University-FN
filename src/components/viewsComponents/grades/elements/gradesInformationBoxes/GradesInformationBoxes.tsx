import React from 'react';
import { ErrorOutline, CheckCircleOutline, Warning, InfoOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import SummaryCard from 'components/shared/summaryCard/SummaryCard';

const GradesInformationBoxes = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 2,
        width: '100%',
      }}
    >
      <SummaryCard
        icon={<ErrorOutline sx={{ color: '#f70000', fontSize: '28px' }} />}
        title="50%"
        text="Not passed subjects"
        color="#ffc1b5"
      />

      <SummaryCard
        icon={<CheckCircleOutline sx={{ color: '#09750d', fontSize: '28px' }} />}
        title="10"
        text="Amount of highest rate grade"
        color="#a5e8a7"
      />

      <SummaryCard
        icon={<Warning sx={{ color: '#ff9800', fontSize: '28px' }} />}
        title="60%"
        text="Underperforming grades"
        color="#ffecb3"
      />

      <SummaryCard
        icon={<InfoOutlined sx={{ color: '#2196f3', fontSize: '28px' }} />}
        title="Total Subjects"
        text="You are enrolled in 8 subjects this semester"
        color="#bbdefb"
      />
    </Box>
  );
};

export default GradesInformationBoxes;
