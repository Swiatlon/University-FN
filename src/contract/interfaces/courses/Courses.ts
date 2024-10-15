export interface ICoursesBaseSchema {
  id: string;
  name: string;
}

export interface IDegreeCourse extends ICoursesBaseSchema {}

export interface IDegreePath extends ICoursesBaseSchema {}

export interface IModule extends ICoursesBaseSchema {}
