import type { IStudent, IAddress, IConsent } from 'Contract/Interfaces/Persons/Persons';

export interface IGetAuthorizedStudentAllDataBackendResponse extends Omit<IStudent, 'degreeCourses' | 'degreePaths' | 'modules'> {
  address: IAddress;
  consent: IConsent;
  degreeCourses: { id: number; degreeCourse: { id: number; name: string } }[];
  degreePaths: { id: number; degreePath: { id: number; name: string } }[];
  modules: { id: number; module: { id: number; name: string } }[];
}

export interface IGetAuthorizedStudentAllDataTransformedReponse extends IStudent {}
