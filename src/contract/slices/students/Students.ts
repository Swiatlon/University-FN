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
