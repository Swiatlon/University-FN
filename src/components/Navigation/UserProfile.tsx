import { Avatar, Box, Typography } from '@mui/material';
import UserIcon from '@assets/images/user-photo.jpg';
import { useGetUserInfoQuery } from '@features/userInfo/userInfoSlice';

function UserProfile() {
  const { data } = useGetUserInfoQuery(undefined);

  if (!data) {
    return <div>Loading...</div>;
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
          Role: {roles.join(', ')}
        </Typography>
      </Box>
    </Box>
  );
}

export default UserProfile;
