import { Outlet } from 'react-router-dom';
import { useEffectOnce } from 'hooks/useExtendedUseEffect';
import { v4 as uuidv4 } from 'uuid';

function SessionMiddleware() {
  useEffectOnce(() => {
    let sessionUUID = sessionStorage.getItem('sessionUUID');

    if (!sessionUUID) {
      sessionUUID = uuidv4();
      sessionStorage.setItem('sessionUUID', sessionUUID);
    }
  });

  return <Outlet />;
}

export default SessionMiddleware;
