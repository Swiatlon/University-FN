import type { ITeacher } from 'Contract/Interfaces/Persons/Persons';
import type { IQueryParams } from 'Contract/Interfaces/Requests/Requests';

export interface IGetAllTeachersResponse {
  items: ITeacher[];
  count?: number;
}

export interface ICommunityPagination {
  page: number;
  pageSize: number;
}

export interface IGetAllTeachersQueryParams extends IQueryParams {}

export interface IGetAllEventsResponse {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface ICreateEventRequest {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  organizators: any[];
}

export interface ICreateEventResponse {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  organizators: any[];
}
