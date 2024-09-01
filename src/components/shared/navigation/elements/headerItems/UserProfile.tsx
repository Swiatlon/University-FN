import { useTranslation } from 'react-i18next';
import { Avatar, Box, Typography, CircularProgress } from '@mui/material';
import UserIcon from 'Assets/images/userPhoto.png';
import { useGetUserInfoQuery } from 'Redux/ApiSlices/UserInfo/UserInfo.Api.Slice';

function UserProfile() {
  const { t } = useTranslation();
  const { data } = useGetUserInfoQuery();

  if (!data) {
    return <CircularProgress />;
  }

  const { name, surname, roles } = data;

  return (
    <Box className="UserProfileContainer">
      <Avatar alt="user icon" className="Avatar IncreaseSizeAnimation" src={UserIcon} />
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
