import { Avatar, Box, Typography } from '@mui/material';
import UserIcon from '@assets/icons/exampleUserIcon.png';
import { useGetUserInfoQuery } from '@features/userInfo/userInfoSlice';

function UserProfile() {
  const { data } = useGetUserInfoQuery();

  if (!data) {
    // Handle the loading or undefined state appropriately
    return <div>Loading...</div>;
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
          Role: {roles.join(', ')}
        </Typography>
      </Box>
    </Box>
  );
}

export default UserProfile;
