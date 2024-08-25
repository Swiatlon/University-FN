import Api from 'Redux/Config/Api';
import type {
  IGetAuthorizedStudentAllDataBackendResponse,
  IGetAuthorizedStudentAllDataTransformedReponse,
} from 'Contract/Slices/Students/Students';

export const studentsSlice = Api.injectEndpoints({
  endpoints: builder => ({
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

export const { useGetAuthorizedStudentAllDataQuery } = studentsSlice;
