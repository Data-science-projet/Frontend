import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <div className="logo">CT</div>
          <h2>CamTranslate</h2>
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Resources</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;