import type { ReactElement, ReactNode } from 'react';

export interface IDialogComponentProps {
  onClose: () => void;
}

export interface IDialogContext {
  enqueueDialog: (dialogComponent: DialogComponentType) => void;
}

export interface DialogProviderProps {
  children: ReactNode;
}

export type DialogComponentType = (props: IDialogComponentProps) => ReactElement;
