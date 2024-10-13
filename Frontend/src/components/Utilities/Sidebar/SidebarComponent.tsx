import { useState } from "react";
import { SidebarTab, SidebarTabName } from "../../../types/sidebar";
import './SidebarComponent.scss';
import { HiHome, HiCog, HiUser, HiLogout, HiMenu, HiLink } from 'react-icons/hi';
import React from "react";

const sidebarTabs: SidebarTab[] = [
  { name: '', icon: HiMenu, canToggleSidebar: true, position: 'top' },
  { name: 'Dashboard', icon: HiHome, position: 'top' },
  { name: 'Settings', icon: HiCog, position: 'top' },
  { name: 'Profile', icon: HiUser, position: 'top' },
  { name: 'Logout', icon: HiLogout, position: 'top' },
  { name: 'Github', icon: HiLink, ref: 'https://github.com/lee-stevens', position: 'bottom' }
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

  const topSidebarItems = sidebarTabs.filter(tab => tab.position === 'top');
  const bottomSidebarItems = sidebarTabs.filter(tab => tab.position === 'bottom');
  
  return (
    <div id="app-utilities__sidebar" className={showSidebar ? '--expanded' : '--collapsed'}>
      <div id="sidebar__top">
        {topSidebarItems.map((tab: SidebarTab) => {
          const tabElement = sidebarElementRecord[tab.name];
          const canToggleSidebar = tab.canToggleSidebar;
  
          return (
            <React.Fragment key={tab.name}>
              <div className="sidebar-item" onClick={() => toggleSidebar(!!canToggleSidebar)}>
                {tabElement}
              </div>
            </React.Fragment>
          );
        })}
      </div>
  
      <div id="sidebar_bottom">
        {bottomSidebarItems.map((tab: SidebarTab) => {
          const tabElement = sidebarElementRecord[tab.name];
          const canToggleSidebar = tab.canToggleSidebar;
  
          return (
            <React.Fragment key={tab.name}>
              <div className="sidebar-item" onClick={() => toggleSidebar(!!canToggleSidebar)}>
                {tabElement}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
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

