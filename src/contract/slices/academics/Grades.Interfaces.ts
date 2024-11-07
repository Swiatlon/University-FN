import type { IGrade } from 'contract/interfaces/academics/Academics';
import type { IQueryParams } from 'contract/interfaces/requests/Requests';

export interface IGetStudentGradesResponse {
  items: IGrade[];
  count?: number;
}

export interface IGetStudentGradesQueryParams extends IQueryParams {
  id?: string;
}
