import { useSelector } from 'react-redux';
import { Box, Accordion, AccordionDetails } from '@mui/material';
import CenteredLoader from 'components/shared/centeredLoader/CenteredLoader';
import { selectId } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import { useGetStudentsCoursesQuery } from 'redux/apiSlices/students/Students.Api.Slice';
import AccordionSummaryWrapper from './elements/AccordionSummaryWrapper';
import DataGridWrapper from './elements/DataGridWrapper';
import { Root, Title, SubjectBox } from './styles/Styled';
import type {
  IStudentCoursesDegreePath,
  IStudentCoursesModule,
  IStudentCourseSubject,
} from 'contract/slices/students/Students';

const gradesColumns = [
  { field: 'name', headerName: 'Subject', flex: 2 },
  { field: 'grade', headerName: 'Grade', flex: 1 },
];

function Courses() {
  const studentId = useSelector(selectId);
  const { data, isFetching } = useGetStudentsCoursesQuery({ studentId: studentId! }, { skip: !studentId });

  if (isFetching) {
    return <CenteredLoader />;
  }

  const renderModules = (modules: IStudentCoursesModule[], level = 0) =>
    modules.map(module => (
      <Accordion key={`module-${module.id}`}>
        <AccordionSummaryWrapper level={level} title={module.name} />
        <AccordionDetails>
          <DataGridWrapper
            rowData={module.subjects.map(subject => ({
              id: subject.id,
              name: subject.name,
              grade: subject.grade,
            }))}
            columnDefs={gradesColumns}
          />
        </AccordionDetails>
      </Accordion>
    ));

  const renderDegreePath = (degreePath: IStudentCoursesDegreePath, level = 0) => (
    <Accordion key={`degreePath-${degreePath.id}`}>
      <AccordionSummaryWrapper level={level} title={degreePath.name} />
      <AccordionDetails>{renderModules(degreePath.modules, level + 1)}</AccordionDetails>
    </Accordion>
  );

  const renderCourseSubjects = (subjects: IStudentCourseSubject[]) => (
    <Accordion key="courseSubjects" defaultExpanded>
      <AccordionSummaryWrapper level={0} title="Courses Subjects" />
      <AccordionDetails>
        <DataGridWrapper
          rowData={subjects.map(subject => ({
            id: subject.id,
            name: subject.name,
            grade: subject.grade,
          }))}
          columnDefs={gradesColumns}
        />
      </AccordionDetails>
    </Accordion>
  );

  return (
    <Root>
      {data ? (
        <Box sx={{ p: 2 }}>
          <Title variant="h5">{data.name}</Title>
          <SubjectBox>
            {renderDegreePath(data.degreePath)}
            {renderCourseSubjects(data.subjects)}
          </SubjectBox>
        </Box>
      ) : null}
    </Root>
  );
}

export default Courses;
