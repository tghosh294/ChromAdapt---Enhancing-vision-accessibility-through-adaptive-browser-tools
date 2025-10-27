// src/components/test/IshiharaTest.js
import React, { useState } from 'react';
import './IshiharaTest.css';

const IshiharaTest = ({ currentTest, totalTests, plate, onAnswer }) => {
  const [userInput, setUserInput] = useState('');

  // Simple plates with actual visible numbers
  const ishiharaPlates = [
    {
      id: 1,
      correctAnswer: '12',
      type: 'normal',
      number: '12',
      bgColor: '#FFB6C1', // Light pink
      numberColor: '#228B22' // Forest green
    },
    {
      id: 2,
      correctAnswer: '8', 
      type: 'deuteranopia',
      number: '8',
      bgColor: '#FFD700', // Gold
      numberColor: '#0000FF' // Blue
    },
    {
      id: 3,
      correctAnswer: '6',
      type: 'protanopia', 
      number: '6',
      bgColor: '#DDA0DD', // Plum
      numberColor: '#32CD32' // Lime green
    },
    {
      id: 4,
      correctAnswer: '29',
      type: 'normal',
      number: '29', 
      bgColor: '#98FB98', // Pale green
      numberColor: '#FF8C00' // Dark orange
    },
    {
      id: 5,
      correctAnswer: '57',
      type: 'tritanopia',
      number: '57',
      bgColor: '#87CEEB', // Sky blue
      numberColor: '#DC143C' // Crimson
    },
    {
      id: 6,
      correctAnswer: '5',
      type: 'achromatopsia',
      number: '5',
      bgColor: '#D3D3D3', // Light gray
      numberColor: '#8A2BE2' // Blue violet
    }
  ];

  const currentPlate = ishiharaPlates[currentTest];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      onAnswer(userInput.trim());
      setUserInput('');
    }
  };

  const handleSkip = () => {
    onAnswer('0');
    setUserInput('');
  };

  return (
    <div className="ishihara-test">
      <div className="test-progress">
        <p>Question {currentTest + 1} of {totalTests}</p>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${((currentTest + 1) / totalTests) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="test-plate">
        <div className="plate-instructions">
          <h3>What number do you see in the circle?</h3>
          <p>Look carefully at the pattern and enter the number you can distinguish</p>
        </div>

        <div className="plate-display">
          <div 
            className="ishihara-plate"
            style={{ backgroundColor: currentPlate.bgColor }}
          >
            <div 
              className="plate-number"
              style={{ color: currentPlate.numberColor }}
            >
              {currentPlate.number}
            </div>
            <div className="dots-overlay"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="answer-form">
          <div className="input-group">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter the number you see"
              required
              maxLength="2"
              pattern="[0-9]*"
            />
            <button type="submit" className="btn-primary">Next</button>
          </div>
          <button type="button" onClick={handleSkip} className="btn-skip">
            I don't see any number
          </button>
        </form>

        <div className="test-instructions">
          <p>💡 <strong>Tip:</strong> The number should be clearly visible if you have normal color vision. 
          If you have color vision deficiency, you might see a different number or no number at all.</p>
        </div>
      </div>
    </div>
  );
};

export default IshiharaTest;