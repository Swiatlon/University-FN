import type { RolesEnum } from 'Contract/Enums/Enums';

export interface IGetUserInfoReponse {
  roles: RolesEnum[];
  name: string;
  surname: string;
}
