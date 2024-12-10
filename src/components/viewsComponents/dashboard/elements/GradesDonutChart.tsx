import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import CustomGradesDonutTooltip from './CustomGradesDonutTooltip';

interface GradesDonutChartProps {
  groupedData: {
    grade: number;
    count: number;
    fill: string;
  }[];
  averageGrade: string;
}

const GradesDonutChart = ({ groupedData, averageGrade }: GradesDonutChartProps) => {
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
        {groupedData.map(entry => (
          <Cell key={`cell-${entry.grade}`} fill={entry.fill} />
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
      <Tooltip content={<CustomGradesDonutTooltip />} />
    </PieChart>
  );
};

export default GradesDonutChart;
