import './SidebarComponent.scss';
import { VscAccount, VscGithub, VscHome, VscMarkdown, VscMenu, VscSettingsGear, VscSignOut } from "react-icons/vsc";
import React from "react";
import { Link } from "react-router-dom";
import { ISidebarItem, SidebarItemPosition } from "@Types/utilities";
import { FaCss3, FaReact, FaSass } from 'react-icons/fa6';
import { SiVite } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';

const sidebarItems: ISidebarItem[] = [
  { name: '', icon: VscMenu, canToggleSidebar: true, internalRef: '/', position: 'top' },
  { name: 'Dashboard', icon: VscHome, internalRef: '/dashboard', position: 'top', canToggleSidebar: false },
  { name: 'Notes', icon: VscMarkdown, internalRef: '/markdown', position: 'top', canToggleSidebar: false },
  { name: 'Settings', icon: VscSettingsGear, internalRef: '/settings',position: 'top', canToggleSidebar: false },
  { name: 'Account', icon: VscAccount, internalRef: '/account',position: 'top', canToggleSidebar: false },
  { name: 'Logout', icon: VscSignOut, internalRef: '/logout',position: 'top', canToggleSidebar: false },
  { name: 'React', icon: FaReact, externalRef: 'https://react.dev/reference/react', position: 'bottom', canToggleSidebar: false },
  { name: 'Vite', icon: SiVite, externalRef: 'https://vite.dev/guide/features', position: 'bottom', canToggleSidebar: false },
  { name: 'SASS', icon: FaSass, externalRef: 'https://sass-lang.com/documentation/', position: 'bottom', canToggleSidebar: false },
  { name: 'Tailwind', icon: RiTailwindCssFill, externalRef: 'https://tailwind.build/classes', position: 'bottom', canToggleSidebar: false },
  { name: 'CSS', icon: FaCss3, externalRef: 'https://developer.mozilla.org/en-US/docs/Web/CSS', position: 'bottom', canToggleSidebar: false },
  { name: 'Github', icon: VscGithub, externalRef: 'https://github.com/lee-stevens', position: 'bottom', canToggleSidebar: false }
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