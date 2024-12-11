import { ReactElement } from 'react';
import { Paper, Avatar, Typography } from '@mui/material';
import UserIcon from 'assets/images/userPhoto.png';

interface IBasicInfoProps {
  name: string;
  surname: string;
  size: number;
}

function BasicInfo({ name, surname, size }: IBasicInfoProps): ReactElement {
  return (
    <Paper className="AvatarBox">
      <Avatar alt={`${name} ${surname}`} sx={{ width: size, height: size }} src={UserIcon} />
      <Typography variant="h6" color="primary" sx={{ fontWeight: 600, textAlign: 'center' }}>
        {`${name} ${surname}`}
      </Typography>
    </Paper>
  );
}

export default BasicInfo;
