import { createContext, useContext } from 'react';
import { DialogComponentType } from './Dialogs.Provider';

interface IDialogContext {
  enqueueDialog: (dialogComponent: DialogComponentType) => void;
}

export const DialogContext = createContext<IDialogContext | undefined>(undefined);

export const useDialog = (): IDialogContext => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }

  return context;
};
