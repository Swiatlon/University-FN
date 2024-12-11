import { CircularProgress, Box } from '@mui/material';

interface IFullScreenLoader {
  bgColor?: string;
}

const FullScreenLoader = ({ bgColor }: IFullScreenLoader) => {
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
        backgroundColor: bgColor ?? 'rgba(255, 255, 255, 0.712)',
        zIndex: 1300,
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
};
export default FullScreenLoader;
