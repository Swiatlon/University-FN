import { useTranslation } from 'react-i18next';
import { Avatar, Box, Typography, CircularProgress } from '@mui/material';
import { useGetLoggedAccountBasicDataQuery } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import UserIcon from 'assets/images/userPhoto.png';

function UserProfile() {
  const { t } = useTranslation();
  const { data } = useGetLoggedAccountBasicDataQuery();

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
