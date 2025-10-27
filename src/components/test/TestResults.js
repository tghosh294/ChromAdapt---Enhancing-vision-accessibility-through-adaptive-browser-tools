// src/components/test/TestResults.js
import React from 'react';
import { Link } from 'react-router-dom';

const TestResults = ({ results, onRetake, onContinue }) => {
  const getTypeDescription = (type) => {
    const descriptions = {
      normal: "You have normal color vision.",
      protanopia: "You have difficulty perceiving red light.",
      deuteranopia: "You have difficulty perceiving green light.", 
      tritanopia: "You have difficulty perceiving blue light.",
      achromatopsia: "You see only in black, white, and shades of gray."
    };
    return descriptions[type] || "Color vision type detected.";
  };

  return (
    <div className="test-results">
      <div className="results-card">
        <h2>Your Color Vision Results</h2>
        
        <div className="results-summary">
          <div className="result-item">
            <label>Detected Type:</label>
            <span className={`type-badge ${results.suspectedType}`}>
              {results.suspectedType}
            </span>
          </div>
          <div className="result-item">
            <label>Severity:</label>
            <span className="severity">{results.severity}</span>
          </div>
          <div className="result-item">
            <label>Test Accuracy:</label>
            <span className="accuracy">{results.accuracy.toFixed(1)}%</span>
          </div>
        </div>

        <div className="type-description">
          <p>{getTypeDescription(results.suspectedType)}</p>
        </div>

        <div className="results-actions">
          <button onClick={onRetake} className="btn-secondary">
            Retake Test
          </button>
          <button onClick={onContinue} className="btn-primary">
            Continue to Dashboard
          </button>
        </div>

        <div className="results-next-steps">
          <h3>Next Steps</h3>
          <ul>
            <li>Visit your dashboard to customize color correction settings</li>
            <li>Install our Chrome extension for real-time web correction</li>
            <li>Learn more about your specific color vision type</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestResults;