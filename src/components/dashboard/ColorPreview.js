// src/components/dashboard/ColorPreview.js
import React from 'react';

const ColorPreview = ({ settings, cvdType }) => {
  return (
    <div className="color-preview">
      <h2>Color Preview</h2>
      <p>See how your settings affect colors in real-time</p>
      
      <div className="preview-area">
        <div className="preview-card">
          <h3>Sample Content</h3>
          <div className="preview-colors">
            <div className="color-sample red">Red</div>
            <div className="color-sample green">Green</div>
            <div className="color-sample blue">Blue</div>
            <div className="color-sample yellow">Yellow</div>
          </div>
          <div className="preview-text">
            <p>This is sample text to show how your color correction settings affect readability.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPreview;