import { useSelector } from 'react-redux';
import { RolesEnum } from 'Contract/Enums/Enums';
import { selectUserRoles } from 'Redux/StateSlices/Auth/Auth.State.Slice';
import { getRoleBasedComponent } from 'Routes/Utils/RouterUtils';

const RoleBasedPersonalData: React.FC = () => {
  const roles = useSelector(selectUserRoles);

  return getRoleBasedComponent(roles);
};

export const profileConfig = {
  path: 'profile',
  handle: {
    navigation: {
      text: 'Profile',
    },
    permissions: {
      availableForRoles: [RolesEnum.STUDENT],
    },
  },
  children: [
    {
      path: 'personal-data',
      element: <RoleBasedPersonalData />,
      handle: {
        navigation: {
          text: 'Personal Data',
        },
        availableForRoles: [RolesEnum.STUDENT],
      },
    },
  ],
};
