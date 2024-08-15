import type { RolesEnum } from 'Contract/Enums/Enums';

export interface IGetUserInfoReponse {
  roles: RolesEnum[];
  name: string;
  surname: string;
}

export interface IGetUserInfoTransformedReponse extends Omit<IGetUserInfoReponse, 'roles'> {
  roles: string[];
}
