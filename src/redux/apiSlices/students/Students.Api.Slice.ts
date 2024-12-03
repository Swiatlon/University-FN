import Api from 'redux/config/Api';
import { extendedOnQueryStartedWithNotifications } from 'utils/slices/ExtendedOnQueryStarted';
import type { IStudentTodo } from 'contract/interfaces/persons/Persons';
import type {
  IGetAuthorizedStudentAllDataBackendResponse,
  IGetAuthorizedStudentAllDataRequest,
  IGetAuthorizedStudentAllDataTransformedReponse,
  IGetStudentTodosResponse,
  IGetStudentTodosRequest,
  ICreateStudentTodoRequest,
  IDeleteStudentTodoRequest,
  IGetStudentTodosTransformedResponse,
  IUpdateStudentTodoRequest,
} from 'contract/slices/students/Students';

export const studentsSlice = Api.injectEndpoints({
  endpoints: builder => ({
    getAuthorizedStudentAllData: builder.query<
      IGetAuthorizedStudentAllDataTransformedReponse,
      IGetAuthorizedStudentAllDataRequest
    >({
      query: ({ studentId }) => ({
        url: `/students/allData/${studentId}`,
      }),
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

    getStudentTodos: builder.query<IGetStudentTodosTransformedResponse[], IGetStudentTodosRequest>({
      query: ({ studentId }) => ({
        url: `/students/${studentId}/todos`,
      }),
      transformResponse: (response: IGetStudentTodosResponse[]) => {
        return response.map(todo => ({
          ...todo,
          student: todo.student.id,
        }));
      },
      providesTags: ['studentsTodosGet'],
    }),

    createStudentTodo: builder.mutation<IStudentTodo, ICreateStudentTodoRequest>({
      query: newTodo => ({
        url: `/students/todos`,
        method: 'POST',
        body: newTodo,
      }),
      onQueryStarted: extendedOnQueryStartedWithNotifications({
        successMessage: 'Created todo!',
        successCallback: (_data, _dispatch) => {},
      }),
      invalidatesTags: ['studentsTodosGet'],
    }),

    updateStudentTodo: builder.mutation<void, IUpdateStudentTodoRequest>({
      query: ({ student, id, updatedTodo }) => ({
        url: `/students/${student}/todos/${id}`,
        method: 'PUT',
        body: updatedTodo,
      }),
      invalidatesTags: ['studentsTodosGet'],
    }),

    deleteStudentTodo: builder.mutation<void, IDeleteStudentTodoRequest>({
      query: ({ studentId, todoId }) => ({
        url: `/students/${studentId}/todos/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['studentsTodosGet'],
    }),
  }),
});

export const {
  useGetAuthorizedStudentAllDataQuery,
  useGetStudentTodosQuery,
  useCreateStudentTodoMutation,
  useDeleteStudentTodoMutation,
  useUpdateStudentTodoMutation,
} = studentsSlice;
