import type { JSXElementConstructor, ReactElement } from 'react';

export interface MenuItem {
  id: string;
  text: string;
  icon: ReactElement<unknown, JSXElementConstructor<unknown> | string>;
  linkTo?: string;
  children?: MenuItem[];
}

export interface MenuItemProps {
  item: MenuItem;
  onToggleSubmenu?: (id: string) => void;
  onNavigate: (linkTo: string) => void;
  isOpen?: boolean;
}

export type OpenMenuItemsState = Record<string, boolean>;

export interface NavigationProps {
  readonly menuItems: MenuItem[];
}
