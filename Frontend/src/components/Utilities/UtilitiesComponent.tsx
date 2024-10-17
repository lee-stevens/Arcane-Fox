import SidebarComponent from './Sidebar/SidebarComponent'
import './UtilitiesComponent.scss'
import UtilityBackdropComponent from './Backdrop/UtilityBackdropComponent'
import { useState } from 'react';

export default function UtilitiesComponent() {
  // The parent component is the State Manager for all children, the children listen to this component
  const [sidebarState, setSidebarState] = useState(false);
  const handleSidebarStateEvent = () => setSidebarState(!sidebarState);
  const handleBackdropClickEvent = () => setSidebarState(false);

  return (
    <div id="app-utilities">
      <SidebarComponent 
        sidebarStateEvent={handleSidebarStateEvent} 
        sidebarState={sidebarState}
      />
      {sidebarState && (
        <UtilityBackdropComponent 
          backdropClickEvent={handleBackdropClickEvent} 
        />
      )}
    </div>
    )
}
