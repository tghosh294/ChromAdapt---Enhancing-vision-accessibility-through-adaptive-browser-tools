// src/pages/Developer.js
import React, { useState } from 'react';
import './Developer.css';

const Developer = () => {
  const [hexColor, setHexColor] = useState('#ff0000');
  const [contrastColor, setContrastColor] = useState('#ffffff');

  const simulateColor = (color, type) => {
    // Simple color simulation - in real app, use proper algorithms
    const simulations = {
      protanopia: { r: color.r * 0.567, g: color.g * 0.433, b: color.b },
      deuteranopia: { r: color.r * 0.625, g: color.g * 0.375, b: color.b },
      tritanopia: { r: color.r * 0.95, g: color.g, b: color.b * 0.05 },
      achromatopsia: { 
        r: (color.r + color.g + color.b) / 3,
        g: (color.r + color.g + color.b) / 3,
        b: (color.r + color.g + color.b) / 3
      }
    };
    return simulations[type] || color;
  };

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };

  const getContrastRatio = (color1, color2) => {
    // Simplified contrast ratio calculation
    const luminance1 = (color1.r * 0.299 + color1.g * 0.587 + color1.b * 0.114) / 255;
    const luminance2 = (color2.r * 0.299 + color2.g * 0.587 + color2.b * 0.114) / 255;
    const ratio = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
    return ratio.toFixed(2);
  };

  const rgb1 = hexToRgb(hexColor);
  const rgb2 = hexToRgb(contrastColor);
  const contrastRatio = getContrastRatio(rgb1, rgb2);

  return (
    <div className="developer">
      <div className="container">
        <header className="developer-header">
          <h1>Developer Tools</h1>
          <p>Resources for creating accessible web experiences</p>
        </header>

        <section className="color-checker">
          <h2>Color Accessibility Checker</h2>
          <div className="checker-grid">
            <div className="color-inputs">
              <div className="color-input">
                <label>Foreground Color</label>
                <input 
                  type="color" 
                  value={hexColor}
                  onChange={(e) => setHexColor(e.target.value)}
                />
                <span>{hexColor}</span>
              </div>
              <div className="color-input">
                <label>Background Color</label>
                <input 
                  type="color" 
                  value={contrastColor}
                  onChange={(e) => setContrastColor(e.target.value)}
                />
                <span>{contrastColor}</span>
              </div>
            </div>

            <div className="contrast-result">
              <h3>Contrast Ratio: {contrastRatio}:1</h3>
              <div className="wcag-compliance">
                <p>AA Compliance: {contrastRatio >= 4.5 ? '✅ Pass' : '❌ Fail'}</p>
                <p>AAA Compliance: {contrastRatio >= 7 ? '✅ Pass' : '❌ Fail'}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="color-simulation">
          <h2>Color Vision Simulation</h2>
          <div className="simulation-grid">
            {['normal', 'protanopia', 'deuteranopia', 'tritanopia', 'achromatopsia'].map(type => (
              <div key={type} className="simulation-item">
                <h4>{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                <div 
                  className="color-preview"
                  style={{ 
                    backgroundColor: hexColor,
                    filter: type !== 'normal' ? `url(#${type})` : 'none'
                  }}
                >
                  Sample Text
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Developer;