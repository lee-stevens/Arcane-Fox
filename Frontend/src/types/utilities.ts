import { IconType } from "react-icons";

export type SidebarItemName = '' | 'Dashboard' | 'Notes' | 'Settings' | 'Account' | 'Logout' | 'Vite' | 'React' | 'SASS' | 'Tailwind' | 'CSS' | 'Github';
export type SidebarItemPosition = 'top' | 'bottom';

export interface ISidebarItem {
  name: SidebarItemName;
  icon: IconType;
  position: SidebarItemPosition;
  canToggleSidebar: boolean;
  internalRef?: string;
  externalRef?: string;
}
