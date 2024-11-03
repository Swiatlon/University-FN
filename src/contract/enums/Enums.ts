export enum RolesEnum {
  ADMIN = 'ADMIN',
  USER = 'USER',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  EMPLOYEE = 'EMPLOYEE',
  EXTERNAL_PARTICIPANT = 'EXTERNAL_PARTICIPANT',
  COMPANY = 'COMPANY',
}
export const rolesEnumArray = Object.values(RolesEnum);

export enum GradeValueEnum {
  Poor = 2,
  Fair = 3,
  Good = 4,
  Excellent = 5,
}
export const gradeValueEnumArray = Object.values(GradeValueEnum).filter(Number) as GradeValueEnum[];

export enum PassDateAttemptEnum {
  FirstAttempt = 0,
  SecondAttempt = 1,
  ThirdAttempt = 2,
  FourthAttempt = 3,
}
export const passDateAttemptEnumArray = Object.values(PassDateAttemptEnum).filter(Number) as PassDateAttemptEnum[];
