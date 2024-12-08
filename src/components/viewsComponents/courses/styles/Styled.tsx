import { Box, Paper, styled, Typography } from '@mui/material';

export const Root = styled(Paper)`
  border-radius: 4px;
  border: solid 1px #e0e0e0;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled(Typography)`
  padding-left: ${({ theme }) => theme.spacing(1.5)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const SubjectBox = styled(Box)`
  background: white;
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing(2)};
`;
