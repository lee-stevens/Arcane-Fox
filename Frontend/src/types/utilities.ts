import { IconType } from "react-icons";

export type SidebarItemName = '' | 'Dashboard' | 'Notes' | 'Settings' | 'Account' | 'Logout' | 'Github';
export type SidebarItemPosition = 'top' | 'bottom';

export interface SidebarItem {
  name: SidebarItemName;
  icon: IconType;
  position: SidebarItemPosition;
  canToggleSidebar?: boolean;
  internalRef?: string;
  externalRef?: string;
}
