import { useSelector } from 'react-redux';
import CenteredLoader from 'components/shared/centeredLoader/CenteredLoader';
import { useGetStudentGradesQuery } from 'redux/apiSlices/academics/Grades.Api.Slice';
import { selectId } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import GradesDataGrid from './elements/gradesDataGrid/GradesDataGrid';
import GradesInformationBoxes from './elements/gradesInformationBoxes/GradesInformationBoxes';
import GradesSummarizeChart from './elements/gradesSummarizeChart/GradesSummarizeChart';
import type { IGetStudentGradesQueryParams } from 'contract/slices/academics/Grades.Interfaces';

const Grades = () => {
  const studentId = useSelector(selectId);

  const initialQueryParams: IGetStudentGradesQueryParams = { studentId: studentId! };
  const { data: grades, isFetching } = useGetStudentGradesQuery(initialQueryParams, { skip: !studentId });

  if (isFetching) {
    return <CenteredLoader />;
  }

  return (
    <>
      <GradesInformationBoxes grades={grades} />
      <GradesSummarizeChart grades={grades!} />
      <GradesDataGrid grades={grades!} />
    </>
  );
};

export default Grades;
