// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import PersonalSettings from '../components/dashboard/PersonalSettings';
import ColorPreview from '../components/dashboard/ColorPreview';
import SyncExtension from '../components/dashboard/SyncExtension';
import './Dashboard.css';

const Dashboard = ({ user, cvdType, severity, setCvdType, setSeverity }) => {
  const [settings, setSettings] = useState({});
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (user) {
      setSettings(user.preferences || getDefaultSettings());
    }
  }, [user]);

  const getDefaultSettings = () => ({
    filterStrength: 0.7,
    contrast: 1.0,
    brightness: 1.0,
    visualCues: true,
    theme: 'auto',
    redBoost: 0,
    greenBoost: 0,
    blueBoost: 0,
    saturation: 1.0
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const saveSettings = () => {
    // Save to localStorage and update user context
    const updatedUser = {
      ...user,
      preferences: settings,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem('colorBlindUser', JSON.stringify(updatedUser));
    alert('Settings saved successfully!');
  };

  if (!user) {
    return (
      <div className="dashboard-login-prompt">
        <div className="container">
          <h2>Please Take the Color Test First</h2>
          <p>You need to complete the color vision test to access your personalized dashboard.</p>
          <a href="/test" className="btn-primary">Take Color Test</a>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="container">
        <header className="dashboard-header">
          <h1>Your Personalized Dashboard</h1>
          <p>Manage your color correction settings and preferences</p>
        </header>

        <div className="dashboard-content">
          <div className="dashboard-sidebar">
            <nav className="dashboard-nav">
              <button 
                className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                Settings
              </button>
              <button 
                className={`nav-item ${activeTab === 'preview' ? 'active' : ''}`}
                onClick={() => setActiveTab('preview')}
              >
                Color Preview
              </button>
              <button 
                className={`nav-item ${activeTab === 'sync' ? 'active' : ''}`}
                onClick={() => setActiveTab('sync')}
              >
                Sync Extension
              </button>
            </nav>
          </div>

          <div className="dashboard-main">
            {activeTab === 'overview' && (
              <div className="overview-tab">
                <div className="user-profile">
                  <h2>Your Color Vision Profile</h2>
                  <div className="profile-details">
                    <div className="profile-item">
                      <label>CVD Type:</label>
                      <span className="profile-value">{cvdType || 'Not detected'}</span>
                    </div>
                    <div className="profile-item">
                      <label>Severity:</label>
                      <span className="profile-value">{severity || 'Not detected'}</span>
                    </div>
                    <div className="profile-item">
                      <label>Test Date:</label>
                      <span className="profile-value">
                        {new Date(user.testResults?.testDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="profile-item">
                      <label>Accuracy:</label>
                      <span className="profile-value">
                        {user.testResults?.accuracy?.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="quick-stats">
                  <h3>Quick Actions</h3>
                  <div className="stats-grid">
                    <div className="stat-card">
                      <h4>Retake Test</h4>
                      <p>Update your color vision profile</p>
                      <a href="/test" className="btn-secondary">Retake Test</a>
                    </div>
                    <div className="stat-card">
                      <h4>Extension Status</h4>
                      <p>Chrome extension: Not installed</p>
                      <a href="/extension" className="btn-primary">Install Now</a>
                    </div>
                    <div className="stat-card">
                      <h4>Current Settings</h4>
                      <p>Filter strength: {settings.filterStrength}</p>
                      <button 
                        onClick={() => setActiveTab('settings')}
                        className="btn-secondary"
                      >
                        Adjust Settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <PersonalSettings
                settings={settings}
                cvdType={cvdType}
                onSettingChange={handleSettingChange}
                onSave={saveSettings}
              />
            )}

            {activeTab === 'preview' && (
              <ColorPreview
                settings={settings}
                cvdType={cvdType}
              />
            )}

            {activeTab === 'sync' && (
              <SyncExtension
                settings={settings}
                user={user}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;