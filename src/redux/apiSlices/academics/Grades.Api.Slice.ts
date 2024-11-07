import Api from 'redux/config/Api';
import type {
  IGetStudentGradesQueryParams,
  IGetStudentGradesResponse,
} from 'contract/slices/academics/Grades.Interfaces';

export const gradesSlice = Api.injectEndpoints({
  endpoints: builder => ({
    getStudentGrades: builder.query<IGetStudentGradesResponse, IGetStudentGradesQueryParams>({
      query: ({ id }) => ({
        url: `/api/grades/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetStudentGradesQuery } = gradesSlice;
