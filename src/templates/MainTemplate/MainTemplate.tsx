import MiddleContainer from '@components/TemplatesComponents/MiddleContent/MiddleContainer';
import Navigation from '@components/TemplatesComponents/Navigation/Navigation';
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
