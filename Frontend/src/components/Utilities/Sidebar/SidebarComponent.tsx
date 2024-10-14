import { useState } from "react";
import './SidebarComponent.scss';
import { HiHome, HiCog, HiUser, HiLogout, HiMenu, HiLink } from 'react-icons/hi';
import React from "react";
import { Link } from "react-router-dom";
import { SidebarItem, SidebarItemName } from "@/types/utilities";

const sidebarTabs: SidebarItem[] = [
  { name: '', icon: HiMenu, canToggleSidebar: true, internalRef: '/', position: 'top' },
  { name: 'Dashboard', icon: HiHome, internalRef: '/dashboard', position: 'top' },
  { name: 'Notes', icon: HiHome, internalRef: '/markdown', position: 'top' },
  { name: 'Settings', icon: HiCog, internalRef: '/settings',position: 'top' },
  { name: 'Account', icon: HiUser, internalRef: '/account',position: 'top' },
  { name: 'Logout', icon: HiLogout, internalRef: '/logout',position: 'top' },
  { name: 'Github', icon: HiLink, externalRef: 'https://github.com/lee-stevens', position: 'bottom' }
];

export default function SidebarComponent() {
  const [showSidebar, setShowSidebar] = useState(false)
  const toggleSidebar = (canToggleSidebar: boolean) => {
    if (canToggleSidebar) {
      const newState = !showSidebar;
      setShowSidebar(newState);
    }
  };

  const sidebarElementRecord: Partial<Record<SidebarItemName, JSX.Element>> = {};
  sidebarTabs.forEach((tab: SidebarItem) => {
    sidebarElementRecord[tab.name] = (tab.externalRef || tab.internalRef) ? 
      SidebarItemWithAnchor(tab, showSidebar) : SidebarItemContent(tab, showSidebar);
  });

  const topSidebarItems = sidebarTabs.filter(tab => tab.position === 'top');
  const bottomSidebarItems = sidebarTabs.filter(tab => tab.position === 'bottom');
  
  return (
    <div id="app-utilities__sidebar" className={showSidebar ? '--expanded' : '--collapsed'}>
      <div id="sidebar__top">
        {topSidebarItems.map((tab: SidebarItem) => {
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
        {bottomSidebarItems.map((tab: SidebarItem) => {
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

function SidebarItemContent(sidebarTab: SidebarItem, showSidebar: boolean): JSX.Element {
  const IconComponent = sidebarTab.icon;

  return (
    <div className="w-100 h-100">
      <IconComponent size={30} className="sidebar-item__icon" />
      {showSidebar && sidebarTab.name && (
        <div className="sidebar-item__label">{sidebarTab.name}</div>
      )}
    </div>
  )
}

function SidebarItemWithAnchor(sidebarTab: SidebarItem, showSidebar: boolean): JSX.Element {
  const sidebarItemContent = SidebarItemContent(sidebarTab, showSidebar);

  if (sidebarTab.externalRef) {
    return (
      <a href={sidebarTab.externalRef} target="_blank" className="sidebar-item">{sidebarItemContent}</a>
    )
  } else if(sidebarTab.internalRef) {
    return (
      <Link className="sidebar-item" to={sidebarTab.internalRef}>{sidebarItemContent}</Link>
    )
  } else {
    return (<></>)
  }
}

