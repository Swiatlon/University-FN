/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import apiSlice from '../api/apiSlice';

export const studentsSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getStudents: builder.query({
      query: () => 'api/students',
      method: 'GET',
    }),

    getSingleStudent: builder.query({
      query: studentId => `api/students/${studentId}`,
      method: 'GET',
    }),

    addStudent: builder.mutation({
      query: newStudent => ({
        url: 'api/students',
        method: 'POST',
        body: newStudent,
      }),
    }),

    updateStudent: builder.mutation({
      query: ({ studentId, updatedStudent }) => ({
        url: `api/students/${studentId}`,
        method: 'PUT',
        body: updatedStudent,
      }),
    }),

    deleteStudent: builder.mutation({
      query: studentId => ({
        url: `api/students/${studentId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetStudentsQuery, useGetSingleStudentQuery, useAddStudentMutation, useUpdateStudentMutation, useDeleteStudentMutation } = studentsSlice;
