// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import Demo from '../components/home/Demo';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Stats />
      <Demo />
      <Testimonials />
      
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Experience True Colors?</h2>
          <p>Take our free color vision test and get personalized correction settings</p>
          <Link to="/test" className="cta-button">Start Color Test</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;