// src/pages/Types.js
import React from 'react';
import './Types.css';

const Types = () => {
  const colorBlindnessTypes = [
    {
      name: 'Protanopia',
      description: 'Red-green color blindness where red appears black and certain shades of orange, yellow, and green all appear as yellow.',
      simulation: 'Reds appear darker and greens appear more yellow',
      tips: ['Use high contrast', 'Avoid red-green combinations', 'Add text labels to colors', 'Use patterns and textures'],
      prevalence: '1% of males'
    },
    {
      name: 'Deuteranopia',
      description: 'Another form of red-green color blindness where greens appear beige and reds appear brownish-yellow.',
      simulation: 'Difficulty distinguishing between red, green, brown, and orange',
      tips: ['Use texture patterns', 'Provide color names', 'Ensure good lighting', 'Avoid color-only indicators'],
      prevalence: '1% of males'
    },
    {
      name: 'Tritanopia',
      description: 'Blue-yellow color blindness where blue appears green and yellow appears violet or light gray.',
      simulation: 'Blues appear greener and difficulty distinguishing blue from yellow',
      tips: ['Avoid blue-yellow combinations', 'Use icons with colors', 'Provide alternative cues', 'Use clear labels'],
      prevalence: '0.01% of population'
    },
    {
      name: 'Achromatopsia',
      description: 'Complete color blindness where individuals see only in shades of gray, black, and white.',
      simulation: 'Complete absence of color vision',
      tips: ['High contrast essential', 'Use patterns and textures', 'Clear typography', 'Avoid color-dependent information'],
      prevalence: '1 in 30,000 people'
    }
  ];

  return (
    <div className="types-page">
      <div className="container">
        <header className="types-header">
          <h1>Types of Color Vision Deficiency</h1>
          <p className="subtitle">Understanding the different forms of color blindness and how they affect vision</p>
        </header>

        <div className="types-grid">
          {colorBlindnessTypes.map((type, index) => (
            <div key={index} className="type-card">
              <div className="card-header">
                <h2>{type.name}</h2>
                <span className="prevalence-badge">{type.prevalence}</span>
              </div>
              
              <p className="type-description">{type.description}</p>
              
              <div className="simulation-section">
                <h4>Visual Simulation</h4>
                <p className="simulation-desc">{type.simulation}</p>
                
                <div className="color-comparison">
                  <div className="vision-comparison">
                    <div className="vision-type">
                      <span className="vision-label">Normal Vision</span>
                      <div className="color-strip normal">
                        <div className="color red" title="Red"></div>
                        <div className="color green" title="Green"></div>
                        <div className="color blue" title="Blue"></div>
                        <div className="color yellow" title="Yellow"></div>
                      </div>
                    </div>
                    <div className="vision-type">
                      <span className="vision-label">{type.name}</span>
                      <div className={`color-strip ${type.name.toLowerCase()}`}>
                        <div className="color red" title="Red"></div>
                        <div className="color green" title="Green"></div>
                        <div className="color blue" title="Blue"></div>
                        <div className="color yellow" title="Yellow"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accessibility-section">
                <h4>Accessibility Tips</h4>
                <div className="tips-grid">
                  {type.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="tip-card">
                      <div className="tip-icon">💡</div>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="page-cta">
          <h3>Not Sure Which Type Affects You?</h3>
          <p>Take our comprehensive color vision test to identify your specific needs</p>
          <a href="/test" className="cta-button">Take Color Test</a>
        </div>
      </div>
    </div>
  );
};

export default Types;