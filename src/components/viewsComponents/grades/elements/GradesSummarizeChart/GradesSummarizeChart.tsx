import React from 'react';
import { Box, Typography } from '@mui/material';
import _ from 'lodash';
import { Bar, BarChart, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { IGrade } from 'contract/interfaces/academics/Academics';

interface GradesSummarizeChartProps {
  grades: IGrade[];
}

const GradesSummarizeChart: React.FC<GradesSummarizeChartProps> = ({ grades }) => {
  const gradeGroups = _.groupBy(grades, 'grade');
  const groupedData = [
    { grade: 2, count: gradeGroups[2]?.length ?? 0, fill: '#c40101' },
    { grade: 3, count: gradeGroups[3]?.length ?? 0, fill: '#ff9800' },
    { grade: 4, count: gradeGroups[4]?.length ?? 0, fill: '#2196f3' },
    { grade: 5, count: gradeGroups[5]?.length ?? 0, fill: '#09750d' },
  ];

  if (groupedData.length === 0) {
    return null;
  }

  return (
    <Box sx={{ background: 'white', my: 2 }}>
      <Typography variant="h6" fontWeight="bold" textAlign="center" sx={{ py: 4 }}>
        Grades Presentation
      </Typography>

      <ResponsiveContainer width="100%" minHeight="450px">
        <BarChart data={groupedData} margin={{ top: 0, bottom: 20, left: -5, right: 10 }}>
          <Bar dataKey="count" fill="red" maxBarSize={200}>
            <LabelList dataKey="count" position="center" fill="white" fontSize={16} fontWeight="bold" />
          </Bar>
          <XAxis
            dataKey="grade"
            allowDecimals={false}
            tickLine={{ transform: 'translate(0, 4)' }}
            tickMargin={12}
            label={{
              value: 'Grade',
              position: 'insideBottom',
              offset: -1,
            }}
          />
          <YAxis
            allowDecimals={false}
            tick={false}
            label={{
              value: 'Amount',
              angle: -90,
            }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

interface ICustomTooltipProps {
  active?: boolean;
  payload?: { payload: { grade: number; count: number } }[];
}

const CustomTooltip: React.FC<ICustomTooltipProps> = ({ active, payload }) => {
  if (active && payload?.[0]) {
    const { grade, count } = payload[0].payload;

    return (
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 2,
          display: 'grid',
          gap: 1,
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold">
          Grade: {grade}
        </Typography>
        <Typography variant="subtitle2">Amount: {count}</Typography>
      </Box>
    );
  }
  return null;
};

export default GradesSummarizeChart;
