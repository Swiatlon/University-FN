import { useSelector } from 'react-redux';
import CenteredLoader from 'components/shared/centeredLoader/CenteredLoader';
import { useGetStudentGradesQuery } from 'redux/apiSlices/academics/Grades.Api.Slice';
import { selectId } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import { selectAccountId } from 'redux/stateSlices/auth/Auth.State.Slice';
import GradesDataGrid from './elements/gradesDataGrid/GradesDataGrid';
import GradesInformationBoxes from './elements/gradesInformationBoxes/GradesInformationBoxes';
import GradesSummarizeChart from './elements/gradesSummarizeChart/GradesSummarizeChart';
import type { IGetStudentGradesQueryParams } from 'contract/slices/academics/Grades.Interfaces';

const Grades = () => {
  const accountId = useSelector(selectAccountId);
  const studentId = useSelector(selectId);

  const initialQueryParams: IGetStudentGradesQueryParams = { accountId: accountId!, studentId: studentId! };
  const { data: grades, isFetching } = useGetStudentGradesQuery(initialQueryParams, { skip: !accountId || !studentId });

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
