import React from 'react';
import { Paper, Avatar, Typography } from '@mui/material';
import UserIcon from 'assets/images/userPhoto.png';

interface IBasicInfoProps {
  name: string;
  surname: string;
  size: number;
}

function BasicInfo({ name, surname, size }: IBasicInfoProps): React.ReactElement {
  return (
    <Paper className="AvatarBox">
      <Avatar alt={`${name} ${surname}`} sx={{ width: size, height: size }} aria-label="User avatar" src={UserIcon} />
      <Typography variant="h6" color="primary" sx={{ textWrap: 'nowrap', fontWeight: 600 }}>
        {`${name} ${surname}`}
      </Typography>
    </Paper>
  );
}

export default BasicInfo;
