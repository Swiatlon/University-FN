import { Paper } from '@mui/material';
import { useGetAuthorizedStudentAllDataQuery } from 'Redux/ApiSlices/Students/Students.Api.Slice';
import FullScreenLoader from 'Components/Shared/FullScreenLoader/FullScreenLoader';
import type { IDetailRowProps } from 'Components/ViewsComponents/PersonalData/DetailRow';
import DetailSection from 'Components/ViewsComponents/PersonalData/DetailSection';

function Courses() {
  const { data, isFetching } = useGetAuthorizedStudentAllDataQuery();

  if (isFetching) {
    return <FullScreenLoader />;
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
    <Paper className="DetailsPaper">
      <DetailSection title="Degree Courses" details={degreeCourseDetails} />
      <DetailSection title="Degree Paths" details={degreePathDetails} />
      <DetailSection title="Modules" details={moduleDetails} renderNested />
    </Paper>
  );
}

export default Courses;
