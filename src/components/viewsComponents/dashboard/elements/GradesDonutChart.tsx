import React from 'react';
import { Box } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

interface GradesDonutChartProps {
  groupedData: { grade: string; count: number; fill: string }[];
  averageGrade: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    payload: {
      grade: string;
      count: number;
      fill: string;
    };
  }[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload?.length && payload[0]) {
    const { grade, fill } = payload[0].payload;

    return (
      <Box
        sx={{
          backgroundColor: 'white',
          border: `2px solid ${fill}`,
          borderRadius: '50%',
          px: 1,
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: fill,
          }}
        >
          {grade}
        </span>
      </Box>
    );
  }

  return null;
};

const GradesDonutChart: React.FC<GradesDonutChartProps> = ({ groupedData, averageGrade }) => {
  return (
    <PieChart width={240} height={225}>
      <Pie
        data={groupedData}
        dataKey="count"
        nameKey="grade"
        innerRadius="70%"
        outerRadius="90%"
        paddingAngle={5}
        startAngle={90}
        endAngle={450}
      >
        {groupedData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Pie>
      <text
        x="50%"
        y="47%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="230%"
        fontWeight="bold"
        fill="#524e61"
      >
        {averageGrade}
      </text>
      <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontSize={14} fill="#888">
        Your Current GPA
      </text>
      <Tooltip content={<CustomTooltip />} />
    </PieChart>
  );
};

export default GradesDonutChart;
