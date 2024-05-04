import { Avatar, Box, Typography, CircularProgress } from '@mui/material';
import UserIcon from '@assets/images/user-photo.jpg';
import { useGetUserInfoQuery } from '@features/userInfo/userInfoSlice';
import { useTranslation } from 'react-i18next';

function UserProfile() {
  const { t } = useTranslation();
  const { data } = useGetUserInfoQuery(undefined);

  if (!data) {
    return <CircularProgress />;
  }

  const { name, surname, roles } = data;

  return (
    <Box className="UserProfileContainer">
      <Avatar alt="user icon" className="Avatar IncreaseSizeAnimation" src={UserIcon as string} />
      <Box className="UserInfoDisplay">
        <Typography className="UsernameText" fontWeight="bold" variant="body1">
          {`${name} ${surname}`}
        </Typography>
        <Typography className="userRoleText" variant="body2">
          {t('Role')}: {roles.join(', ')}
        </Typography>
      </Box>
    </Box>
  );
}

export default UserProfile;
