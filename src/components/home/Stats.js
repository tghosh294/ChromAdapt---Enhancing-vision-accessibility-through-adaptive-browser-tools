// src/components/home/Stats.js
import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat">
            <h3>300+ Million</h3>
            <p>People helped worldwide</p>
          </div>
          <div className="stat">
            <h3>4 CVD Types</h3>
            <p>Supported color vision deficiencies</p>
          </div>
          <div className="stat">
            <h3>Real-time</h3>
            <p>Color correction on any website</p>
          </div>
          <div className="stat">
            <h3>100% Free</h3>
            <p>No cost, forever</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;