import { CircularProgress, Box } from '@mui/material';

function FullScreenLoader() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1300,
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}

export default FullScreenLoader;
