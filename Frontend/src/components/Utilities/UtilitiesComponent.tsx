import { useState } from "react";
import SidebarComponent from "./Sidebar/SidebarComponent";
import './UtilitiesComponent.scss'

export default function UtilitiesComponent() {
  // Function to be passed to the child that updates the state in the parent
  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebarStateChange = (newState: boolean) => {
    setShowSidebar(newState);
  };

  return (
    <div id="app-utilities" className={showSidebar ? 'with-sidebar' : ''}>
      <SidebarComponent handleSidebarStateChange={handleSidebarStateChange}  />
    </div>
    )
}
