import { CircularProgress, Box } from '@mui/material';

const CenteredLoader = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1300,
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export default CenteredLoader;
