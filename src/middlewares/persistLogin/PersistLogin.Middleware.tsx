import { Outlet } from 'react-router-dom';
import FullScreenLoader from 'components/shared/fullScreenLoader/FullScreenLoader';
import { useTypedSelector } from 'hooks/useStore.Hooks';
import { useVerifySession } from 'hooks/useVerifyingSession';
import { selectCurrentToken } from 'redux/stateSlices/auth/Auth.State.Slice';

function PersistLoginMiddleware() {
  const token = useTypedSelector(selectCurrentToken) ?? localStorage.getItem('accessToken');
  const { isLoading } = useVerifySession(token);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return <Outlet />;
}

export default PersistLoginMiddleware;
