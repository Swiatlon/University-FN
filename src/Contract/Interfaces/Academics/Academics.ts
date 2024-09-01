export interface IDegreeCourse {
  id: number;
  degreeCourse: {
    id: number;
    name: string;
  };
}

export interface IDegreePath {
  id: number;
  degreePath: {
    id: number;
    name: string;
  };
}

export interface ISubject {
  id: number;
  name: string;
}

export interface IModule {
  id: number;
  module: {
    id: number;
    name: string;
    subjects: ISubject[];
  };
}
