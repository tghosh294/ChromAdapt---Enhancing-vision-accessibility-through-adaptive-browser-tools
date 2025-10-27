// src/components/common/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ user, setUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('colorBlindUser');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h2>ChromAdapt</h2>
          </Link>
        </div>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/types" onClick={() => setIsMenuOpen(false)}>Types</Link></li>
            <li><Link to="/test" onClick={() => setIsMenuOpen(false)}>Color Test</Link></li>
            {user ? (
              <>
                <li><Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            ) : (
              <li><Link to="/test" onClick={() => setIsMenuOpen(false)}>Get Started</Link></li>
            )}
            <li><Link to="/extension" onClick={() => setIsMenuOpen(false)}>Extension</Link></li>
            <li><Link to="/community" onClick={() => setIsMenuOpen(false)}>Community</Link></li>
            <li><Link to="/developer" onClick={() => setIsMenuOpen(false)}>Developer Tools</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;