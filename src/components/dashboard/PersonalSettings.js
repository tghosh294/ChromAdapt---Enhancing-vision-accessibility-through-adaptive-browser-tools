// src/components/dashboard/PersonalSettings.js
import React from 'react';

const PersonalSettings = ({ settings, cvdType, onSettingChange, onSave }) => {
  return (
    <div className="personal-settings">
      <h2>Personal Settings</h2>
      <div className="settings-grid">
        <div className="setting">
          <label>Filter Strength</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={settings.filterStrength}
            onChange={(e) => onSettingChange('filterStrength', parseFloat(e.target.value))}
          />
          <span>{settings.filterStrength}</span>
        </div>
        
        <div className="setting">
          <label>Contrast</label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={settings.contrast}
            onChange={(e) => onSettingChange('contrast', parseFloat(e.target.value))}
          />
          <span>{settings.contrast}</span>
        </div>

        <div className="setting">
          <label>Brightness</label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={settings.brightness}
            onChange={(e) => onSettingChange('brightness', parseFloat(e.target.value))}
          />
          <span>{settings.brightness}</span>
        </div>
      </div>

      <button onClick={onSave} className="save-btn">Save Settings</button>
    </div>
  );
};

export default PersonalSettings;