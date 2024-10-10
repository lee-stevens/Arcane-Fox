import { useState } from "react";
import { SidebarTab, SidebarTabName } from "../../../types/sidebar";
import './SidebarComponent.scss';
import { HiHome, HiCog, HiUser, HiLogout, HiMenu, HiInbox } from 'react-icons/hi';
import React from "react";

const sidebarTabs: SidebarTab[] = [
  { name: '', icon: HiMenu, canToggleSidebar: true },
  { name: 'Dashboard', icon: HiHome },
  { name: 'Settings', icon: HiCog },
  { name: 'Profile', icon: HiUser },
  { name: 'Logout', icon: HiLogout },
  { name: 'Github', icon: HiInbox, ref: 'https://github.com/lee-stevens' }
];

export default function SidebarComponent(
  { handleSidebarStateChange: onChildChange }: { handleSidebarStateChange: (newState: boolean) => void }
) {
  const [showSidebar, setShowSidebar] = useState(false)
  const toggleSidebar = (canToggleSidebar: boolean) => {
    if (canToggleSidebar) {
      const newState = !showSidebar;
      setShowSidebar(newState);
      onChildChange(newState);
    }
  };

  const sidebarElementRecord: Partial<Record<SidebarTabName, JSX.Element>> = {};
  sidebarTabs.forEach((tab: SidebarTab) => {
    sidebarElementRecord[tab.name] = tab.ref ? SidebarItemWithAnchor(tab, showSidebar) : SidebarItemContent(tab, showSidebar);
  });

  return (
    <div id="app-utilities__sidebar" className={showSidebar ? '--expanded' : '--collapsed'}>
      { Object.values(sidebarElementRecord).map((tabElement: JSX.Element, index) => {
        const canToggleSidebar = sidebarTabs[index].canToggleSidebar;
        const tabName = sidebarTabs[index].name;
        return (
          <React.Fragment key={tabName}>
            <div className="sidebar-item" onClick={() => toggleSidebar(!!canToggleSidebar)}>
              {tabElement}
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

function SidebarItemContent(sidebarTab: SidebarTab, showSidebar: boolean): JSX.Element {
  const IconComponent = sidebarTab.icon;

  return (
    <>
      <IconComponent size={30} className="sidebar-item__icon" />
      {showSidebar && sidebarTab.name && (
        <div className="sidebar-item__label">{sidebarTab.name}</div>
      )}
    </>
  )
}

function SidebarItemWithAnchor(sidebarTab: SidebarTab, showSidebar: boolean): JSX.Element {
  const sidebarItemContent = SidebarItemContent(sidebarTab, showSidebar);
  return (
    <a href={sidebarTab.ref} target="_blank" className="sidebar-item">{sidebarItemContent}</a>
  )
}

