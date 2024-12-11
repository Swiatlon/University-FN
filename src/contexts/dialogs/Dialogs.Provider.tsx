import { useState, useCallback, useMemo, ReactElement, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DialogContext } from './Dialogs.Context';

export const DialogProvider = ({ children }: IDialogProviderProps) => {
  const [dialogs, setDialogs] = useState<{ id: string; Component: DialogComponentType }[]>([]);

  const enqueueDialog = useCallback((dialogComponent: DialogComponentType) => {
    const id = uuidv4();

    setDialogs(prev => [...prev, { id, Component: dialogComponent }]);
  }, []);

  const closeDialog = useCallback(() => {
    setDialogs(prev => prev.slice(1));
  }, []);

  const contextValue = useMemo(() => ({ enqueueDialog }), [enqueueDialog]);

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      {dialogs.map(({ id, Component }) => (
        <Component key={id} onClose={closeDialog} />
      ))}
    </DialogContext.Provider>
  );
};

export interface IDialogComponentProps {
  onClose: () => void;
}

export interface IDialogProviderProps {
  children: ReactNode;
}

export type DialogComponentType = (props: IDialogComponentProps) => ReactElement;
