import Api from 'Redux/Api';
import type { IGetAuthorizedStudentAllDataBackendResponse, IGetAuthorizedStudentAllDataTransformedReponse } from 'Contract/Slices/Students/Students';
export const studentsSlice = Api.injectEndpoints({
  endpoints: builder => ({
    getStudents: builder.query({
      query: () => 'api/students',
    }),

    getSingleStudent: builder.query({
      query: studentId => `api/students/${studentId}`,
    }),

    getAuthorizedStudentAllData: builder.query<IGetAuthorizedStudentAllDataTransformedReponse, void>({
      query: () => 'api/students/me',
      transformResponse: (response: IGetAuthorizedStudentAllDataBackendResponse) => ({
        ...response,
        degreeCourses: response.degreeCourses.map(dc => ({
          id: dc.degreeCourse.id.toString(),
          name: dc.degreeCourse.name,
        })),
        degreePaths: response.degreePaths.map(dp => ({
          id: dp.degreePath.id.toString(),
          name: dp.degreePath.name,
        })),
        modules: response.modules.map(m => ({
          id: m.module.id.toString(),
          name: m.module.name,
        })),
      }),
    }),
  }),
});

export const { useGetStudentsQuery, useGetSingleStudentQuery, useGetAuthorizedStudentAllDataQuery } = studentsSlice;
