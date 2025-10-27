// src/components/dashboard/SyncExtension.js
import React from 'react';

const SyncExtension = ({ settings, user }) => {
  const handleSync = () => {
    // In real implementation, this would sync with the Chrome extension
    alert('Settings synced with Chrome extension!');
  };

  return (
    <div className="sync-extension">
      <h2>Sync with Chrome Extension</h2>
      
      <div className="sync-status">
        <p>Extension Status: <span className="status-not-installed">Not Installed</span></p>
        <p>Last Synced: Never</p>
      </div>

      <div className="sync-actions">
        <button onClick={handleSync} className="sync-btn" disabled>
          Sync Settings
        </button>
        <p className="sync-note">
          Install the Chrome extension to enable automatic synchronization of your preferences.
        </p>
        
        <a href="/extension" className="install-link">
          Install Chrome Extension
        </a>
      </div>
    </div>
  );
};

export default SyncExtension;