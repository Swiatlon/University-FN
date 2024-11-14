import type { RolesEnum } from 'contract/enums/Enums';

export interface IGetLoggedAccountBasicDataReponse {
  roles: RolesEnum[];
  name: string;
  surname: string;
  accountId: string;
  id: string;
  organizer: {
    id: string;
    organizerType: string;
  };
}

export interface IGetLoggedAccountBasicDataTransformedReponse extends Omit<IGetLoggedAccountBasicDataReponse, 'roles'> {
  roles: string[];
}
