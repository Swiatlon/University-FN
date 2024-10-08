import type { RolesEnum } from 'contract/enums/Enums';

export interface IGetUserInfoReponse {
  roles: RolesEnum[];
  name: string;
  surname: string;
  organizer: {
    id: string;
    organizerType: string;
  };
}

export interface IGetUserInfoTransformedReponse extends Omit<IGetUserInfoReponse, 'roles'> {
  roles: string[];
}
