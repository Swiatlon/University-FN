import type { GradeValueEnum, PassDateAttemptEnum } from 'contract/enums/Enums';

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

export interface IGrade {
  id: string;
  subject: {
    id: number;
    name: string;
  };
  grade: GradeValueEnum | null;
  passDateAttempt: PassDateAttemptEnum | null;
}
