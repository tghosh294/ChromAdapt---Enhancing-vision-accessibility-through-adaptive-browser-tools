// src/pages/Types.js
import React from 'react';
import './Types.css';

const Types = () => {
  const colorBlindnessTypes = [
    {
      name: 'Protanopia',
      description: 'Red-green color blindness where red appears black and certain shades of orange, yellow, and green all appear as yellow.',
      simulation: 'reds appear darker and greens appear more yellow',
      tips: ['Use high contrast', 'Avoid red-green combinations', 'Add text labels to colors']
    },
    {
      name: 'Deuteranopia',
      description: 'Another form of red-green color blindness where greens appear beige and reds appear brownish-yellow.',
      simulation: 'difficulty distinguishing between red, green, brown, and orange',
      tips: ['Use texture patterns', 'Provide color names', 'Ensure good lighting']
    },
    {
      name: 'Tritanopia',
      description: 'Blue-yellow color blindness where blue appears green and yellow appears violet or light gray.',
      simulation: 'blues appear greener and difficulty distinguishing blue from yellow',
      tips: ['Avoid blue-yellow combinations', 'Use icons with colors', 'Provide alternative cues']
    },
    {
      name: 'Achromatopsia',
      description: 'Complete color blindness where individuals see only in shades of gray, black, and white.',
      simulation: 'complete absence of color vision',
      tips: ['High contrast essential', 'Use patterns and textures', 'Clear typography']
    }
  ];

  return (
    <div className="types">
      <div className="container">
        <header className="types-header">
          <h1>Types of Color Vision Deficiency</h1>
          <p>Understanding the different forms of color blindness and how they affect vision</p>
        </header>

        <div className="types-grid">
          {colorBlindnessTypes.map((type, index) => (
            <div key={index} className="type-card">
              <h2>{type.name}</h2>
              <p>{type.description}</p>
              
              <div className="simulation">
                <h4>Visual Simulation:</h4>
                <p>{type.simulation}</p>
                
                <div className="color-comparison">
                  <div className="comparison">
                    <span>Normal Vision</span>
                    <div className="color-strip normal">
                      <div className="color red"></div>
                      <div className="color green"></div>
                      <div className="color blue"></div>
                      <div className="color yellow"></div>
                    </div>
                  </div>
                  <div className="comparison">
                    <span>{type.name}</span>
                    <div className={`color-strip ${type.name.toLowerCase()}`}>
                      <div className="color red"></div>
                      <div className="color green"></div>
                      <div className="color blue"></div>
                      <div className="color yellow"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accessibility-tips">
                <h4>Accessibility Tips:</h4>
                <ul>
                  {type.tips.map((tip, tipIndex) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Types;