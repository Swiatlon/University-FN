import type { IDegreeCourse, IDegreePath, IModule } from 'Contract/Interfaces/Academics/Academics';
import type { IStudent, IAddress, IConsent } from 'Contract/Interfaces/Persons/Persons';
export interface IGetAuthorizedStudentAllDataBackendResponse
  extends Omit<IStudent, 'degreeCourses' | 'degreePaths' | 'modules'> {
  address: IAddress;
  consent: IConsent;
  degreeCourses: IDegreeCourse[];
  degreePaths: IDegreePath[];
  modules: IModule[];
}

export interface IGetAuthorizedStudentAllDataTransformedReponse extends IStudent {}
