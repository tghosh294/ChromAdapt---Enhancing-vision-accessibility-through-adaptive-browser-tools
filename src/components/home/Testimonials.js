// src/components/home/Testimonials.js
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex J.",
      type: "Deuteranopia",
      text: "This extension changed how I experience the web. Colors finally make sense!"
    },
    {
      name: "Sarah M.",
      type: "Protanopia", 
      text: "I can now read charts and graphs at work without asking for help."
    },
    {
      name: "Mike R.",
      type: "Tritanopia",
      text: "The automatic calibration made setup so easy. It just works!"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Users Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>"{testimonial.text}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;