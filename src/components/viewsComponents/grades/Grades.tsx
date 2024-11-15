import GradesDataGrid from './elements/gradesDataGrid/GradesDataGrid';
import GradesInformationBoxes from './elements/gradesInformationBoxes/GradesInformationBoxes';
import GradesSummarizeChart from './elements/GradesSummarizeChart/GradesSummarizeChart';

const Grades = () => {
  return (
    <>
      <GradesInformationBoxes />
      <GradesSummarizeChart />
      <GradesDataGrid />
    </>
  );
};

export default Grades;
