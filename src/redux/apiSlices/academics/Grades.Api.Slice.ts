import Api from 'redux/config/Api';
import type { IGrade } from 'contract/interfaces/academics/Academics';
import type { IGetStudentGradesQueryParams } from 'contract/slices/academics/Grades.Interfaces';

export const gradesSlice = Api.injectEndpoints({
  endpoints: builder => ({
    getStudentGrades: builder.query<IGrade[], IGetStudentGradesQueryParams>({
      query: ({ studentId, accountId }) => ({
        url: `/grades/${studentId}`,
        params: {
          accountId,
        },
      }),
      transformResponse: (response?: IGrade[]) => response ?? [],
    }),
  }),
});

export const { useGetStudentGradesQuery } = gradesSlice;
