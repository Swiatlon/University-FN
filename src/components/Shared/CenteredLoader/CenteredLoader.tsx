import { CircularProgress, Box } from '@mui/material';

function CenteredLoader() {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.712)',
        zIndex: 1300,
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}

export default CenteredLoader;
