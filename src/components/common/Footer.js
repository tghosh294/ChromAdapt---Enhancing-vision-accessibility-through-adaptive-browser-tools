// src/components/common/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ColorVision Access</h3>
            <p>Making the web accessible for everyone, regardless of color vision.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/types">Color Types</a></li>
              <li><a href="/test">Color Test</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/extension">Chrome Extension</a></li>
              <li><a href="/developer">Developer Tools</a></li>
              <li><a href="/community">Community</a></li>
              <li><a href="/help">Help & Support</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: support@colorvisionaccess.com</p>
            <p>Follow us on social media</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ColorVision Access. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;