// src/components/common/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, setUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerStyles = {
    header: {
      background: 'white',
      boxShadow: '0 2px 10px rgba(30, 60, 114, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: '0'
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    logo: {
      textDecoration: 'none'
    },
    logoText: {
      color: '#1e3c72',
      margin: 0,
      background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontSize: '1.8rem',
      fontWeight: '700'
    },
    nav: {
      display: isMenuOpen ? 'block' : 'flex'
    },
    navList: {
      display: 'flex',
      listStyle: 'none',
      gap: '2rem',
      alignItems: 'center',
      margin: 0,
      padding: 0
    },
    navLink: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: '500',
      transition: 'color 0.3s ease',
      padding: '0.5rem 0'
    },
    navLinkHover: {
      color: '#1e3c72'
    },
    menuToggle: {
      display: 'none',
      flexDirection: 'column',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '5px'
    },
    menuToggleSpan: {
      width: '25px',
      height: '3px',
      background: '#333',
      margin: '3px 0',
      transition: '0.3s'
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('colorBlindUser');
  };

  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.container}>
        <div className="logo">
          <Link to="/" style={headerStyles.logo}>
            <h2 style={headerStyles.logoText}>ChromAdapt</h2>
          </Link>
        </div>
        
        <button 
          style={headerStyles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span style={headerStyles.menuToggleSpan}></span>
          <span style={headerStyles.menuToggleSpan}></span>
          <span style={headerStyles.menuToggleSpan}></span>
        </button>

        <nav style={headerStyles.nav}>
          <ul style={headerStyles.navList}>
            <li><Link to="/" style={headerStyles.navLink}>Home</Link></li>
            <li><Link to="/about" style={headerStyles.navLink}>About</Link></li>
            <li><Link to="/types" style={headerStyles.navLink}>Types</Link></li>
            <li><Link to="/test" style={headerStyles.navLink}>Color Test</Link></li>
            {user ? (
              <>
                <li><Link to="/dashboard" style={headerStyles.navLink}>Dashboard</Link></li>
                <li>
                  <button 
                    onClick={handleLogout}
                    style={{
                      background: '#1e3c72',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: '500'
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li><Link to="/test" style={headerStyles.navLink}>Get Started</Link></li>
            )}
            <li><Link to="/extension" style={headerStyles.navLink}>Extension</Link></li>
            <li><Link to="/community" style={headerStyles.navLink}>Community</Link></li>
            <li><Link to="/developer" style={headerStyles.navLink}>Developer Tools</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;