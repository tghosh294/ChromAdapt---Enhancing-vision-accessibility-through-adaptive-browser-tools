// src/components/common/Footer.js
import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      background: '#2c3e50',
      color: 'white',
      padding: '3rem 0 1rem',
      marginTop: 'auto'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    footerContent: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: '2rem',
      marginBottom: '2rem'
    },
    footerSection: {
      display: 'flex',
      flexDirection: 'column'
    },
    footerHeading: {
      marginBottom: '1rem',
      fontSize: '1.2rem'
    },
    footerList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    footerLink: {
      color: '#bdc3c7',
      textDecoration: 'none',
      marginBottom: '0.5rem',
      display: 'block',
      transition: 'color 0.3s ease'
    },
    footerBottom: {
      borderTop: '1px solid #34495e',
      paddingTop: '1rem',
      textAlign: 'center',
      color: '#bdc3c7'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerHeading}>ColorVision Access</h3>
            <p>Making the web accessible for everyone, regardless of color vision.</p>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerHeading}>Quick Links</h4>
            <ul style={styles.footerList}>
              <li><a href="/" style={styles.footerLink}>Home</a></li>
              <li><a href="/about" style={styles.footerLink}>About</a></li>
              <li><a href="/types" style={styles.footerLink}>Color Types</a></li>
              <li><a href="/test" style={styles.footerLink}>Color Test</a></li>
            </ul>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerHeading}>Resources</h4>
            <ul style={styles.footerList}>
              <li><a href="/extension" style={styles.footerLink}>Chrome Extension</a></li>
              <li><a href="/developer" style={styles.footerLink}>Developer Tools</a></li>
              <li><a href="/community" style={styles.footerLink}>Community</a></li>
              <li><a href="/help" style={styles.footerLink}>Help & Support</a></li>
            </ul>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerHeading}>Contact</h4>
            <p>Email: support@colorvisionaccess.com</p>
            <p>Follow us on social media</p>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>&copy; 2024 ColorVision Access. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;