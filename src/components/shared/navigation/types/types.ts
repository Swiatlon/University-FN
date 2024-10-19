import type { JSXElementConstructor, ReactElement } from 'react';
import type { RolesEnum } from 'contract/enums/Enums';

export interface IMenuItem {
  id: string;
  text: string;
  icon: ReactElement<unknown, JSXElementConstructor<unknown> | string>;
  linkTo?: string;
  children?: IMenuItem[];
  availableForRoles?: RolesEnum[];
}

export interface IMenuItemProps {
  item: IMenuItem;
  onToggleSubmenu?: (id: string) => void;
  onNavigate: () => void;
  isOpen?: boolean;
  isChildren?: boolean;
}

export type OpenMenuItemsStateType = Record<string, boolean>;

export interface INavigationProps {
  readonly menuItems: IMenuItem[];
}
