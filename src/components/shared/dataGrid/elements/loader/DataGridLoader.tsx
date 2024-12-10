import { Box, CircularProgress } from '@mui/material';

const DataGridLoader = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        placeItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 9999,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default DataGridLoader;
