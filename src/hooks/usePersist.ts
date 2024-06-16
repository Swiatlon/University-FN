import { useState, useEffect } from 'react';

type UsePersistReturnType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const usePersist = (): UsePersistReturnType => {
  const getInitialPersistValue = (): boolean => {
    const storedValue = localStorage.getItem('persist');

    if (storedValue === null) {
      return false;
    }
    return JSON.parse(storedValue) as boolean;
  };

  const [persist, setPersist] = useState<boolean>(getInitialPersistValue);

  useEffect(() => {
    localStorage.setItem('persist', JSON.stringify(persist));
  }, [persist]);

  return [persist, setPersist];
};

export default usePersist;
