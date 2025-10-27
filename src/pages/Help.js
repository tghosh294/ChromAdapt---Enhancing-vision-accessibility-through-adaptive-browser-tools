// src/pages/Help.js
import React from 'react';
import './Help.css';

const Help = () => {
  const faqs = [
    {
      question: "How do I install the Chrome extension?",
      answer: "Visit the Extension page and click 'Add to Chrome'. The installation is automatic and takes just a few seconds."
    },
    {
      question: "Is my data secure?",
      answer: "Yes! All processing happens locally in your browser. We don't collect or store any personal information."
    },
    {
      question: "Does it work on all websites?",
      answer: "Our extension works on most websites. Some highly dynamic or complex web applications might require additional configuration."
    }
  ];

  return (
    <div className="help">
      <div className="container">
        <header className="help-header">
          <h1>Help & Support</h1>
          <p>Get assistance with our tools and services</p>
        </header>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <h2>Contact Support</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <select>
              <option>General Inquiry</option>
              <option>Technical Support</option>
              <option>Feature Request</option>
              <option>Bug Report</option>
            </select>
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Help;