import Api from 'Redux/Config/Api';
import type {
  IGetAuthorizedStudentAllDataBackendResponse,
  IGetAuthorizedStudentAllDataTransformedReponse,
} from 'Contract/Slices/Students/Students';

export const studentsSlice = Api.injectEndpoints({
  endpoints: builder => ({
    getAuthorizedStudentAllData: builder.query<IGetAuthorizedStudentAllDataTransformedReponse, void>({
      query: () => 'api/students/me',
      transformResponse: (
        response: IGetAuthorizedStudentAllDataBackendResponse
      ): IGetAuthorizedStudentAllDataTransformedReponse => ({
        ...response,
        degreeCourses: response.degreeCourses.map(dc => ({
          id: dc.id,
          degreeCourse: {
            id: dc.degreeCourse.id,
            name: dc.degreeCourse.name,
          },
        })),
        degreePaths: response.degreePaths.map(dp => ({
          id: dp.id,
          degreePath: {
            id: dp.degreePath.id,
            name: dp.degreePath.name,
          },
        })),
        modules: response.modules.map(m => ({
          id: m.id,
          module: {
            id: m.module.id,
            name: m.module.name,
            subjects: m.module.subjects,
          },
        })),
      }),
    }),
  }),
});

export const { useGetAuthorizedStudentAllDataQuery } = studentsSlice;
