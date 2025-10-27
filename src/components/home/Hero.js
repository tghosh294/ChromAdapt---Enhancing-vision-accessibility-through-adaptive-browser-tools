// src/components/home/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>See the Web in True Colors</h1>
          <p>
            Our intelligent Chrome extension provides personalized, real-time color correction 
            for people with color vision deficiency. Experience the web as it was meant to be seen.
          </p>
          <div className="hero-buttons">
            <Link to="/extension" className="btn-primary">Install Extension</Link>
            <Link to="/test" className="btn-secondary">Take Color Test</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="color-comparison">
            <div className="comparison-item">
              <h4>Without Correction</h4>
              <div className="color-grid uncorrected">
                <div className="color-box red"></div>
                <div className="color-box green"></div>
                <div className="color-box blue"></div>
              </div>
            </div>
            <div className="comparison-item">
              <h4>With Our Extension</h4>
              <div className="color-grid corrected">
                <div className="color-box red-corrected"></div>
                <div className="color-box green-corrected"></div>
                <div className="color-box blue-corrected"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;