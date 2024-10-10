import { IconType } from "react-icons";

export type SidebarTabName = '' | 'Dashboard' | 'Settings' | 'Profile' | 'Logout' | 'Github';

export interface SidebarTab {
  name: SidebarTabName;
  icon: IconType;
  canToggleSidebar?: boolean;
  ref?: string;
}
