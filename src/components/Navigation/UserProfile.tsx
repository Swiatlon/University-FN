import { Avatar, Box, Typography } from '@mui/material';
import UserIcon from '@assets/icons/exampleUserIcon.png';

function UserProfile() {
  return (
    <Box className="UserProfileContainer">
      <Avatar alt="user icon" className="Avatar IncreaseSizeAnimation" src={UserIcon} />
      <Box className="UserInfoDisplay">
        <Typography className="UsernameText" fontWeight="bold" variant="body1">
          Wiercik
        </Typography>
        <Typography className="userRoleText" variant="body2">
          Role: Admin
        </Typography>
      </Box>
    </Box>
  );
}

export default UserProfile;
