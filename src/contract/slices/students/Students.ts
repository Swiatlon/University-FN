import type { GradeValueEnum } from 'contract/enums/Enums';
import type { IDegreeCourse, IDegreePath, IModule } from 'contract/interfaces/academics/Academics';
import type { IStudent, IAddress, IConsent, IStudentTodo } from 'contract/interfaces/persons/Persons';

export interface IGetAuthorizedStudentAllDataBackendResponse
  extends Omit<IStudent, 'degreeCourses' | 'degreePaths' | 'modules'> {
  address: IAddress;
  consent: IConsent;
  degreeCourses: IDegreeCourse[];
  degreePaths: IDegreePath[];
  modules: IModule[];
}

export interface IGetAuthorizedStudentAllDataRequest {
  studentId: string;
}

export interface IGetAuthorizedStudentAllDataTransformedReponse extends IStudent {}

export interface IStudentCourseSubject {
  id: number;
  name: string;
  grade: GradeValueEnum | null;
}

export interface IStudentCoursesModule {
  id: number;
  name: string;
  subjects: IStudentCourseSubject[];
}

export interface IStudentCoursesDegreePath {
  id: number;
  name: string;
  modules: IStudentCoursesModule[];
}

export interface IGetStudentCoursesResponse {
  id: number;
  name: string;
  subjects: IStudentCourseSubject[];
  degreePath: IStudentCoursesDegreePath;
}

export interface IGetStudentCoursesRequest {
  studentId: string;
}

export interface IGetStudentTodosRequest {
  studentId: string;
}

export interface IGetStudentTodosResponse {
  id: number;
  title: string;
  description: string;
  endDate: Date;
  student: {
    id: number;
  };
  color: string;
}

export interface IGetStudentTodosTransformedResponse {
  id: number;
  title: string;
  description: string;
  endDate: Date;
  student: number;
  color: string;
}

export interface ICreateStudentTodoRequest extends Omit<IStudentTodo, 'id'> {}

export interface IUpdateStudentTodoRequest {
  student: number;
  id: number;
  updatedTodo: Partial<ICreateStudentTodoRequest>;
}

export interface IDeleteStudentTodoRequest {
  studentId: number;
  todoId: number;
}
