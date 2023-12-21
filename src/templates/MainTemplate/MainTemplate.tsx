import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import Navigation from '@components/TemplatesComponents/Navigation/Navigation';
import './MainTemplate.scss';

interface AppContainerProps {
  isOpen: boolean;
  isAuthenticated: boolean;
}

const AppContainer = styled(Box)<AppContainerProps>(({ isOpen, isAuthenticated }) => ({
  gridTemplateAreas: isAuthenticated ? '"nav header" "nav content"' : '"nav content"',
  gridTemplateRows: isAuthenticated ? '64px auto' : 'auto',
  gridTemplateColumns: isOpen ? '300px auto' : '80px auto',
  transition: '600ms all',
}));

const MainTemplate = () => {
  const isAuthenticated = false; // Later wil be flag true/false
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppContainer className="AppContainer" isOpen={isMenuOpen} isAuthenticated={isAuthenticated}>
      <Navigation toggleMenuHandler={toggleMenuOpen} isOpen={isMenuOpen} />
      {isAuthenticated && <Box className="AppBar"></Box>}
      <Box className="Content">
        <Outlet />
      </Box>
    </AppContainer>
  );
};

export default MainTemplate;
