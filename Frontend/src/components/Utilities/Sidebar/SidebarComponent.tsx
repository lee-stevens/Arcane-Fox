import './SidebarComponent.scss';
import { HiHome, HiCog, HiUser, HiLogout, HiMenu, HiLink } from 'react-icons/hi';
import React from "react";
import { Link } from "react-router-dom";
import { ISidebarItem, SidebarItemPosition } from "@Types/utilities";

const sidebarItems: ISidebarItem[] = [
  { name: '', icon: HiMenu, canToggleSidebar: true, internalRef: '/', position: 'top' },
  { name: 'Dashboard', icon: HiHome, internalRef: '/dashboard', position: 'top', canToggleSidebar: false },
  { name: 'Notes', icon: HiHome, internalRef: '/markdown', position: 'top', canToggleSidebar: false },
  { name: 'Settings', icon: HiCog, internalRef: '/settings',position: 'top', canToggleSidebar: false },
  { name: 'Account', icon: HiUser, internalRef: '/account',position: 'top', canToggleSidebar: false },
  { name: 'Logout', icon: HiLogout, internalRef: '/logout',position: 'top', canToggleSidebar: false },
  { name: 'Github', icon: HiLink, externalRef: 'https://github.com/lee-stevens', position: 'bottom', canToggleSidebar: false }
];

/* EXAMPLE: How to pass several parameters into a Component including functions */
export default function SidebarComponent(
  { sidebarState, sidebarStateEvent }: 
  { 
    sidebarState: boolean, 
    sidebarStateEvent: () => void 
  }
) {
  const changeSidebarStateFN = (canToggleSidebar: boolean) => {
    if (canToggleSidebar) {
      sidebarStateEvent();
    }
  }

  const sidebarItemElementRecord: Record<SidebarItemPosition, JSX.Element[]> = { top: [], bottom: []};
  sidebarItems.forEach((item: ISidebarItem) => {
    sidebarItemElementRecord[item.position].push(CreateSidebarItem(item, sidebarState, changeSidebarStateFN));
  });

  return (
    <div id="app-utilities__sidebar" className={sidebarState ? '--expanded' : '--collapsed'}>
      <div className="sidebar__top">
        {sidebarItemElementRecord['top']}
      </div>
      <div className="sidebar__bottom">
        {sidebarItemElementRecord['bottom']}
      </div>
    </div>
  );
}

function CreateSidebarItem(
  sidebarItem: ISidebarItem, 
  sidebarState: boolean, 
  toggleSidebar: (canToggelSidebar: boolean) => void
): JSX.Element {
  const sidebarItemContent = CreateSidebarItemWithAnchors(sidebarItem, sidebarState);

  return (
    <React.Fragment key={sidebarItem.name}>
      <div className="sidebar-item" onClick={() => toggleSidebar(sidebarItem.canToggleSidebar)}>
        { sidebarItemContent }
      </div>
    </React.Fragment>
  )
}

function CreateSidebarItemWithAnchors(sidebarItem: ISidebarItem, sidebarState: boolean): JSX.Element {
  const sidebarItemContent = CreateSidebarItemContent(sidebarItem, sidebarState);

  if (sidebarItem.externalRef) {
    return (
      <a href={sidebarItem.externalRef} target="_blank">{sidebarItemContent}</a>
    )
  } else if(sidebarItem.internalRef) {
    return (
      <Link to={sidebarItem.internalRef}>{sidebarItemContent}</Link>
    )
  } else {
    return sidebarItemContent;
  }
}

function CreateSidebarItemContent(sidebarItem: ISidebarItem, sidebarState: boolean): JSX.Element {
  const IconComponent = sidebarItem.icon;

  return (
    <div className="sidebar-item__inner-content">
      <IconComponent size={30} className="sidebar-item__icon" />
      {sidebarState && sidebarItem.name && (
        <div className="sidebar-item__label">{sidebarItem.name}</div>
      )}
    </div>
  )
}