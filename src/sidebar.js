import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isSidebarOpen ? 'Collapse' : 'Expand'}
      </div>
      <div className="logo">Your Logo</div>
      <ul className="nav-links">
        <button><li>Home</li></button>
        <button><li>Feed</li></button>
        <button><li>Notifications</li></button>
        <button><li>Messages</li></button>
      </ul>
    </div>
  );
}

export default Sidebar;
