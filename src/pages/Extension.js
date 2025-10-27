// src/pages/Extension.js
import React from 'react';
import './Extension.css';

const Extension = () => {
  return (
    <div className="extension">
      <div className="container">
        <header className="extension-header">
          <h1>Chrome Extension</h1>
          <p>Real-time color correction for the entire web</p>
        </header>

        <section className="extension-features">
          <div className="feature-grid">
            <div className="feature">
              <h3>Real-time Correction</h3>
              <p>Automatic color adjustment on every website you visit</p>
            </div>
            <div className="feature">
              <h3>Four CVD Types</h3>
              <p>Support for Protanopia, Deuteranopia, Tritanopia, and Achromatopsia</p>
            </div>
            <div className="feature">
              <h3>Auto-calibration</h3>
              <p>Smart detection and personalized settings based on your test results</p>
            </div>
            <div className="feature">
              <h3>DOM-Aware</h3>
              <p>Intelligent correction that understands web page structure</p>
            </div>
          </div>
        </section>

        <section className="extension-demo">
          <h2>How It Works</h2>
          <div className="demo-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Install Extension</h4>
              <p>Add to Chrome in one click</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Take Color Test</h4>
              <p>Complete quick calibration</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Browse Normally</h4>
              <p>Automatic correction on all sites</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Adjust Settings</h4>
              <p>Fine-tune for your preference</p>
            </div>
          </div>
        </section>

        <section className="extension-install">
          <div className="install-card">
            <h2>Install ColorVision Access</h2>
            <p>Free Chrome Extension - No personal data collected</p>
            <button className="install-btn">Add to Chrome</button>
            <div className="privacy-note">
              <small>Works offline • No data collection • Free forever</small>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Extension;