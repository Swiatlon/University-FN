import { Box } from '@mui/material';
import SummaryCard from 'components/shared/summaryCard/SummaryCard';
import { useGradesCards } from '../../constants/Cards';
import type { IGrade } from 'contract/interfaces/academics/Academics';

interface IGradesInformationBoxes {
  grades: IGrade[];
}

const GradesInformationBoxes = ({ grades }: IGradesInformationBoxes) => {
  const cards = useGradesCards(grades);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
        gap: 2,
        width: '100%',
      }}
    >
      {cards.map(({ id, icon, title, text, color }) => (
        <SummaryCard key={id} icon={icon} title={title} text={text} color={color} />
      ))}
    </Box>
  );
};

export default GradesInformationBoxes;
