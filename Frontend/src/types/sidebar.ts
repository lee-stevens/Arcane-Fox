import { IconType } from "react-icons";

export type SidebarTabName = '' | 'Dashboard' | 'Settings' | 'Profile' | 'Logout' | 'Github';
export type SidebarItemPosition = 'top' | 'bottom';

export interface SidebarTab {
  name: SidebarTabName;
  icon: IconType;
  position: SidebarItemPosition;
  canToggleSidebar?: boolean;
  ref?: string;
}
