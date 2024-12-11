import { useEffect, useRef } from 'react';

export const useEffectOnce = (effect: () => void | (() => void)) => {
  useEffect(() => {
    effect();
  }, []);
};

export const useEffectOnlyOnUpdate = (effect: () => void | (() => void), dependencies: unknown[]) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    effect();
  }, dependencies);
};
