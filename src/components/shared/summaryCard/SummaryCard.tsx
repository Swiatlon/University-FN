import { ReactNode } from 'react';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/system';
import { CardContainer, CardIconRoundedContainer, CardSubTitle, CardTitle } from './styles/Styled';

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  color: string;
  sx?: SxProps<Theme>;
}

const SummaryCard = ({ icon, title, text, color, sx }: SummaryCardProps) => {
  return (
    <CardContainer sx={{ ...sx }} data-cy="card-container">
      <CardIconRoundedContainer color={color}>{icon}</CardIconRoundedContainer>
      <Box>
        <CardTitle variant="body1" data-cy="card-title">
          {title}
        </CardTitle>
        <CardSubTitle variant="body2" data-cy="card-text">
          {text}
        </CardSubTitle>
      </Box>
    </CardContainer>
  );
};

export default SummaryCard;
