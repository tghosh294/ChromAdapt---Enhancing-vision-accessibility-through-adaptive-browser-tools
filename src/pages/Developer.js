// src/pages/Developer.js
import React, { useState } from 'react';
import './Developer.css';

const Developer = () => {
  const [foregroundColor, setForegroundColor] = useState('#ff0000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [contrastRatio, setContrastRatio] = useState(4.0);

  // Calculate contrast ratio
  const calculateContrast = (fg, bg) => {
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 0, g: 0, b: 0 };
    };

    const getLuminance = (rgb) => {
      const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const fgRgb = hexToRgb(fg);
    const bgRgb = hexToRgb(bg);
    const fgLum = getLuminance(fgRgb);
    const bgLum = getLuminance(bgRgb);
    const ratio = (Math.max(fgLum, bgLum) + 0.05) / (Math.min(fgLum, bgLum) + 0.05);
    return ratio.toFixed(2);
  };

  const handleColorChange = (type, value) => {
    if (type === 'foreground') {
      setForegroundColor(value);
    } else {
      setBackgroundColor(value);
    }
    const ratio = calculateContrast(
      type === 'foreground' ? value : foregroundColor,
      type === 'background' ? value : backgroundColor
    );
    setContrastRatio(ratio);
  };

  // Proper color blindness simulation using matrix filters
  const visionTypes = [
    { 
      name: 'Normal', 
      filter: 'none',
      
    },
    { 
      name: 'Protanopia', 
      filter: 'protanopia',
      
    },
    { 
      name: 'Deuteranopia', 
      filter: 'deuteranopia',
     
    },
    { 
      name: 'Tritanopia', 
      filter: 'tritanopia',
      
    },
    { 
      name: 'Achromatopsia', 
      filter: 'grayscale(100%)',
      
    }
  ];

  const getWCAGCompliance = (ratio) => {
    const aa = ratio >= 4.5;
    const aaLarge = ratio >= 3.0;
    const aaa = ratio >= 7.0;
    const aaaLarge = ratio >= 4.5;
    
    return { aa, aaLarge, aaa, aaaLarge };
  };

  const compliance = getWCAGCompliance(parseFloat(contrastRatio));

  // Function to apply proper color blindness simulation
  const applyColorBlindnessFilter = (visionType) => {
    const baseStyles = { 
      backgroundColor: backgroundColor,
      color: foregroundColor
    };

    // Add SVG filters for proper color blindness simulation
    return (
      <div className="vision-simulator-wrapper">
        <div 
          className="vision-preview"
          style={baseStyles}
          data-vision={visionType.filter}
        >
          <div className="preview-content">
            <h5>Sample Heading</h5>
            <p>This is sample text showing how colors appear with {visionType.name.toLowerCase()} vision.</p>
            <div className="preview-elements">
              <span className="element success">Success</span>
              <span className="element warning">Warning</span>
              <span className="element error">Error</span>
            </div>
          </div>
        </div>
        <p className="vision-description">{visionType.description}</p>
      </div>
    );
  };

  return (
    <div className="developer-page">
      <div className="container">
        <header className="developer-header">
          <h1>Developer Tools</h1>
          <p className="subtitle">Resources for creating accessible web experiences</p>
        </header>

        <section className="color-checker-section">
          <div className="section-header">
            <h2>Color Accessibility Checker</h2>
            <p>Test color combinations for WCAG compliance and accessibility</p>
          </div>

          <div className="checker-container">
            <div className="color-inputs">
              <div className="color-input-group">
                <label>Foreground Color</label>
                <div className="color-picker-container">
                  <input 
                    type="color" 
                    value={foregroundColor}
                    onChange={(e) => handleColorChange('foreground', e.target.value)}
                    className="color-picker"
                  />
                  <input 
                    type="text" 
                    value={foregroundColor}
                    onChange={(e) => handleColorChange('foreground', e.target.value)}
                    className="color-hex"
                    maxLength="7"
                  />
                </div>
              </div>

              <div className="color-input-group">
                <label>Background Color</label>
                <div className="color-picker-container">
                  <input 
                    type="color" 
                    value={backgroundColor}
                    onChange={(e) => handleColorChange('background', e.target.value)}
                    className="color-picker"
                  />
                  <input 
                    type="text" 
                    value={backgroundColor}
                    onChange={(e) => handleColorChange('background', e.target.value)}
                    className="color-hex"
                    maxLength="7"
                  />
                </div>
              </div>
            </div>

            <div className="preview-section">
              <div 
                className="color-preview"
                style={{ 
                  backgroundColor: backgroundColor,
                  color: foregroundColor
                }}
              >
                <h3>Preview Text</h3>
                <p>This is how your text will appear with these colors.</p>
                <div className="preview-buttons">
                  <button 
                    className="preview-btn primary"
                    style={{ backgroundColor: foregroundColor, color: backgroundColor }}
                  >
                    Primary Button
                  </button>
                  <button 
                    className="preview-btn secondary"
                    style={{ backgroundColor: backgroundColor, color: foregroundColor, border: `2px solid ${foregroundColor}` }}
                  >
                    Secondary Button
                  </button>
                </div>
              </div>
            </div>

            <div className="results-section">
              <div className="contrast-result">
                <h3>Contrast Ratio: <span className="ratio-value">{contrastRatio}:1</span></h3>
                <div className="wcag-compliance">
                  <h4>WCAG 2.1 Compliance</h4>
                  <div className="compliance-grid">
                    <div className={`compliance-item ${compliance.aa ? 'pass' : 'fail'}`}>
                      <span className="status-icon">{compliance.aa ? '✅' : '❌'}</span>
                      <span>AA (4.5:1) - Normal Text</span>
                    </div>
                    <div className={`compliance-item ${compliance.aaLarge ? 'pass' : 'fail'}`}>
                      <span className="status-icon">{compliance.aaLarge ? '✅' : '❌'}</span>
                      <span>AA (3:1) - Large Text</span>
                    </div>
                    <div className={`compliance-item ${compliance.aaa ? 'pass' : 'fail'}`}>
                      <span className="status-icon">{compliance.aaa ? '✅' : '❌'}</span>
                      <span>AAA (7:1) - Normal Text</span>
                    </div>
                    <div className={`compliance-item ${compliance.aaaLarge ? 'pass' : 'fail'}`}>
                      <span className="status-icon">{compliance.aaaLarge ? '✅' : '❌'}</span>
                      <span>AAA (4.5:1) - Large Text</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
                
<div className="test-colors-note">
  <p><strong>Tip:</strong> Try these color combinations to see clear differences:</p>
  <div className="color-suggestions">
    <button 
      className="color-suggestion red"
      onClick={() => {
        setForegroundColor('#ff0000');
        setBackgroundColor('#ffffff');
      }}
    >
      Red on White
    </button>
    <button 
      className="color-suggestion green"
      onClick={() => {
        setForegroundColor('#00ff00');
        setBackgroundColor('#ffffff');
      }}
    >
      Green on White
    </button>
    <button 
      className="color-suggestion blue"
      onClick={() => {
        setForegroundColor('#0000ff');
        setBackgroundColor('#ffff00');
      }}
    >
      Blue on Yellow
    </button>
    <button 
      className="color-suggestion orange"
      onClick={() => {
        setForegroundColor('#ffa500');
        setBackgroundColor('#0000ff');
      }}
    >
      Orange on Blue
    </button>
  </div>
</div>
        <section className="simulation-section">
          <div className="section-header">
            <h2>Color Vision Simulation</h2>
            <p>See how your colors appear to people with different types of color vision deficiency</p>
          </div>

          {/* SVG Filters for Color Blindness Simulation */}
          <svg style={{ display: 'none' }}>
            <defs>
              {/* Protanopia - Red-blind */}
              <filter id="protanopia">
                <feColorMatrix
                  type="matrix"
                  values="0.567, 0.433, 0,     0, 0
                          0.558, 0.442, 0,     0, 0
                          0,     0.242, 0.758, 0, 0
                          0,     0,     0,     1, 0"
                />
              </filter>
              
              {/* Deuteranopia - Green-blind */}
              <filter id="deuteranopia">
                <feColorMatrix
                  type="matrix"
                  values="0.625, 0.375, 0,   0, 0
                          0.7,   0.3,   0,   0, 0
                          0,     0.3,   0.7, 0, 0
                          0,     0,     0,   1, 0"
                />
              </filter>
              
              {/* Tritanopia - Blue-blind */}
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

          <div className="simulation-container">
            <div className="simulation-grid">
              {visionTypes.map((vision, index) => (
                <div key={index} className="vision-simulator">
                  <h4 className="vision-name">{vision.name}</h4>
                  {applyColorBlindnessFilter(vision)}
                </div>
              ))}
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default Developer;