import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { IDialogContext, DialogProviderProps, DialogComponentType } from './types/Dialogs.Context.Types';

const DialogContext = createContext<IDialogContext | undefined>(undefined);

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
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

export const useDialog = (): IDialogContext => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }

  return context;
};
