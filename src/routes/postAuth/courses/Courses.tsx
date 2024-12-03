import { useSelector } from 'react-redux';
import { Paper } from '@mui/material';
import CenteredLoader from 'components/shared/centeredLoader/CenteredLoader';
import { selectId } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import { useGetAuthorizedStudentAllDataQuery } from 'redux/apiSlices/students/Students.Api.Slice';
import DetailSection from '../../../components/viewsComponents/personalData/DetailSection';
import type { IDetailRowProps } from '../../../components/viewsComponents/personalData/DetailRow';

function Courses() {
  const studentId = useSelector(selectId);
  const { data, isFetching } = useGetAuthorizedStudentAllDataQuery({ studentId: studentId! }, { skip: !studentId });

  if (isFetching) {
    return <CenteredLoader />;
  }

  const degreeCourseDetails: IDetailRowProps[] =
    data?.degreeCourses.map(degreeCourse => ({
      icon: 'School',
      label: 'Degree Course',
      value: degreeCourse.degreeCourse.name,
    })) ?? [];

  const degreePathDetails: IDetailRowProps[] =
    data?.degreePaths.map(degreePath => ({
      icon: 'Timeline',
      label: 'Degree Path',
      value: degreePath.degreePath.name,
    })) ?? [];

  const moduleDetails: IDetailRowProps[] =
    data?.modules.map(module => ({
      icon: 'LibraryBooks',
      label: 'Module',
      value: module.module.name,
      nestedTitle: 'Subjects',
      nestedElements: module.module.subjects.map(subject => ({
        icon: 'Description',
        value: subject.name,
      })),
    })) ?? [];

  return (
    <Paper className="DetailsPaper DetailsPaperCourses">
      <DetailSection title="Degree Courses" details={degreeCourseDetails} />
      <DetailSection title="Degree Paths" details={degreePathDetails} />
      <DetailSection title="Modules" details={moduleDetails} renderNested className="ModulesCourses" />
    </Paper>
  );
}

export default Courses;
