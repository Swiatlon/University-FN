import MiddleContainer from '@components/middleContent/MiddleContainer';
import Navigation from '@components/navigation/Navigation';
import { Outlet } from 'react-router-dom';

const MainTemplate = () => {
  return (
    <>
      <Navigation />
      <MiddleContainer>
        <Outlet />
      </MiddleContainer>
    </>
  );
};

export default MainTemplate;
