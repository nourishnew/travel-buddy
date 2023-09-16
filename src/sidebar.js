import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

// Allows bar to slide back and forth
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="logo">ROAMR</div>
      <ul className="nav-links">
        <button className='homebuttons'><li>Home</li></button>
        <button className='homebuttons'><li>Feed</li></button>
        <button className='homebuttons'><li>Notifications</li></button>
        <button className='homebuttons'><li>Messages</li></button>
      </ul>

    </div>

  );
}

export default Sidebar;
