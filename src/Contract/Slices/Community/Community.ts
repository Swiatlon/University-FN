import type { ITeacher } from 'Contract/Interfaces/Persons/Persons';
import type { IQueryParams } from 'Contract/Interfaces/Requests/Requests';

export interface getAllTeachersResponse {
  items: ITeacher[];
  count?: number;
}

export interface ICommunityPagination {
  page: number;
  pageSize: number;
}

export interface IGetAllTeachersQueryParams extends IQueryParams {}
