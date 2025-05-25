import React from 'react';
import './main.css';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { IoIosSearch } from "react-icons/io";
import { FaSquarePlus } from "react-icons/fa6";

function MainContent({ onToggleSidebar, children }) {
  return (
    <div className="main-content">
      <header className="main-header">
        <div className="left-section">
          <button onClick={onToggleSidebar} className="toggle-btn">☰</button>
          <div className="search-wrapper">
            <span className="search-icon"><IoIosSearch /></span>
            <input type="text" className="search-input" placeholder="Search..." />
          </div>
          <FaBell className="icon-button" />
        </div>
        <div className="right-section">
          <FaUserCircle className="icon-button user-icon" />
          <FaSquarePlus className="icon-button user-icon" />
        </div>
      </header>

      <section className="content-area">
        {children}
      </section>
    </div>
  );
}

export default MainContent;
