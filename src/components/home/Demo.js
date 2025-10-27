// src/components/home/Demo.js
import React, { useState } from 'react';
import './Demo.css';

const Demo = () => {
  const [activeFilter, setActiveFilter] = useState('normal');
  const [demoText, setDemoText] = useState('This is sample text showing how colors appear differently for people with various types of color vision deficiency.');

  const filters = {
    normal: { name: 'Normal Vision', filter: 'none' },
    protanopia: { name: 'Protanopia', filter: 'url(#protanopia)' },
    deuteranopia: { name: 'Deuteranopia', filter: 'url(#deuteranopia)' },
    tritanopia: { name: 'Tritanopia', filter: 'url(#tritanopia)' },
    achromatopsia: { name: 'Achromatopsia', filter: 'grayscale(100%)' }
  };

  return (
    <section className="demo-section">
      <div className="container">
        <h2>Experience the Difference</h2>
        <p>See how our extension corrects colors in real-time</p>
        
        <div className="demo-controls">
          {Object.entries(filters).map(([key, value]) => (
            <button
              key={key}
              className={`demo-btn ${activeFilter === key ? 'active' : ''}`}
              onClick={() => setActiveFilter(key)}
            >
              {value.name}
            </button>
          ))}
        </div>

        <div className="demo-area">
          <svg style={{ display: 'none' }}>
            <defs>
              <filter id="protanopia">
                <feColorMatrix
                  type="matrix"
                  values="0.567, 0.433, 0,     0, 0
                          0.558, 0.442, 0,     0, 0
                          0,     0.242, 0.758, 0, 0
                          0,     0,     0,     1, 0"
                />
              </filter>
              <filter id="deuteranopia">
                <feColorMatrix
                  type="matrix"
                  values="0.625, 0.375, 0,   0, 0
                          0.7,   0.3,   0,   0, 0
                          0,     0.3,   0.7, 0, 0
                          0,     0,     0,   1, 0"
                />
              </filter>
              <filter id="tritanopia">
                <feColorMatrix
                  type="matrix"
                  values="0.95, 0.05,  0,     0, 0
                          0,    0.433, 0.567, 0, 0
                          0,    0.475, 0.525, 0, 0
                          0,    0,     0,     1, 0"
                />
              </filter>
            </defs>
          </svg>

          <div 
            className="demo-content"
            style={{ filter: filters[activeFilter].filter }}
          >
            <div className="demo-card">
              <h3>Sample Web Content</h3>
              <p>{demoText}</p>
              <div className="demo-ui">
                <button className="ui-btn primary">Primary Button</button>
                <button className="ui-btn secondary">Secondary Button</button>
                <button className="ui-btn success">Success Message</button>
                <button className="ui-btn warning">Warning Alert</button>
                <button className="ui-btn error">Error Notification</button>
              </div>
              <div className="demo-chart">
                <div className="chart-bar" style={{backgroundColor: '#FF6B6B', height: '60px'}}>Red</div>
                <div className="chart-bar" style={{backgroundColor: '#4ECDC4', height: '40px'}}>Green</div>
                <div className="chart-bar" style={{backgroundColor: '#45B7D1', height: '80px'}}>Blue</div>
                <div className="chart-bar" style={{backgroundColor: '#FFBE0B', height: '30px'}}>Yellow</div>
              </div>
            </div>
          </div>
        </div>

        <div className="demo-install">
          <h3>Install our Chrome Extension for Real-time Correction</h3>
          <p>Get personalized color correction on every website you visit</p>
          <button className="install-btn">Add to Chrome - Free</button>
        </div>
      </div>
    </section>
  );
};

export default Demo;