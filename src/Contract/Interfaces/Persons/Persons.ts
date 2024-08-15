import type { IDegreeCourse, IDegreePath, IModule } from 'Contract/Interfaces/Courses/Courses';

export enum GenderEnum {
  Men = 'Men',
  Women = 'Women',
}

export interface IAddress {
  id: string;
  country: string;
  city: string;
  postalCode: string;
  street: string;
  buildingNumber: string;
  apartmentNumber: string;
}

export interface IConsent {
  id: number;
  permissionForPhoto: boolean;
  permissionForDataProcessing: boolean;
}

export interface IPerson {
  id: string;
  name: string;
  surname: string;
  pesel: string;
  gender: GenderEnum;
  dateOfBirth: Date;
  nationality: string;
  contactEmail: string;
  contactPhone: string;
  dateOfAdmission: Date;
}

export interface IStudent extends IPerson {
  address: IAddress;
  consent: IConsent;
  degreeCourses: IDegreeCourse[];
  degreePaths: IDegreePath[];
  modules: IModule[];
}

export interface ITeacher {
  id: number;
  contactEmail: string;
  contactPhone: string;
  name: string;
  surname: string;
}
