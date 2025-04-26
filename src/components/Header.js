// components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <div className="logo">CT</div>
          <h2>MboaTranslate</h2>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-links desktop">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="mobile-menu-button" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/resources" onClick={toggleMenu}>Resources</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;