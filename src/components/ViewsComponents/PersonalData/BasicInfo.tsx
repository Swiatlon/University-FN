import React from 'react';
import { Paper, Avatar, Typography } from '@mui/material';
import UserIcon from 'assets/images/userPhoto.png';

interface IBasicInfoProps {
  name: string;
  surname: string;
}

function BasicInfo({ name, surname }: IBasicInfoProps): React.ReactElement {
  return (
    <Paper className="AvatarBox">
      <Avatar alt={`${name} ${surname}`} aria-label="User avatar" sx={{ width: 120, height: 120 }} src={UserIcon} />
      <Typography variant="h6" color="primary" sx={{ textWrap: 'nowrap', fontWeight: 600 }}>
        {`${name} ${surname}`}
      </Typography>
    </Paper>
  );
}

export default BasicInfo;
