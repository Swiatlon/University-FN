export interface IGetAllEventsResponse {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface ITransformedGetAllEventsResponse extends IGetAllEventsResponse {
  startTime: string;
  endTime: string;
}

export interface ICreateEventRequest {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  organizators: string[];
}

export interface ICreateEventResponse {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  organizators: string[];
}

export interface IUpdateEventRequest {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  organizators: string[];
}

export interface IUpdateEventResponse {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  organizators: string[];
}

export interface IDeleteEventResponse {
  result: string;
}

export interface IDeleteEventRequest {
  id: string;
}
