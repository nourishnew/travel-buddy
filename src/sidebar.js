import React, { useState } from 'react';
import './sidebar.css';
import NOMA from './noma logo inverted.png';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

// Allows bar to slide back and forth
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="logo">
      <img class="brand-logo" src={NOMA} alt='our logo!'></img>
      NOMA
      </div>
      <ul className="nav-links">
        <button href= 'App.js' className='homebuttons'><li>Home</li></button>
        <button className='homebuttons'><li>Feed</li></button>
        <button className='homebuttons'><li>Notifications</li></button>
        <button className='homebuttons'><li>Messages</li></button>
      </ul>

    </div>

  );
}

export default Sidebar;
