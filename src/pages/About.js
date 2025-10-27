// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <header className="about-header">
          <h1>About ColorVision Access</h1>
          <p>Our mission to make the digital world accessible to everyone</p>
        </header>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            We believe that digital accessibility is a fundamental right. Our mission is to 
            empower the 300+ million people worldwide with color vision deficiency to 
            experience the web in its true colors through intelligent, personalized technology.
          </p>
        </section>

        <section className="problem-section">
          <h2>The Problem We Solve</h2>
          <div className="problem-stats">
            <div className="stat">
              <h3>300+ Million</h3>
              <p>People worldwide have color vision deficiency</p>
            </div>
            <div className="stat">
              <h3>1 in 12 Men</h3>
              <p>Are affected by some form of color blindness</p>
            </div>
            <div className="stat">
              <h3>1 in 200 Women</h3>
              <p>Experience color vision deficiency</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <h3>Group 33</h3>
              <p>Computer Engineering Students</p>
              <p>Datta Meghe College of Engineering</p>
            </div>
            <div className="team-member">
              <h3>Dr. A. P. Pande</h3>
              <p>Project Supervisor</p>
              <p>Department of Computer Engineering</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;