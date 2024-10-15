import { useEffect, useRef, type DependencyList } from 'react';

export const useEffectOnce = (callback: () => void, when = true) => {
  const hasRunOnce = useRef(false);

  useEffect(() => {
    if (when && !hasRunOnce.current) {
      callback();
      hasRunOnce.current = true;
    }
  }, [when]);
};

export function useEffectAfterMount(fn: () => void, deps: DependencyList = []) {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    fn();
  }, deps);
}
