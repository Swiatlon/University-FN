export interface ICoursesBaseSchema {
  id: string;
  name: string;
}

export type IDegreeCourse = ICoursesBaseSchema;

export type IDegreePath = ICoursesBaseSchema;

export type IModule = ICoursesBaseSchema;
