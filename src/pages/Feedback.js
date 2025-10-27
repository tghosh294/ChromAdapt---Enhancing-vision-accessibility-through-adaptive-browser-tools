// src/pages/Feedback.js
import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    type: 'general',
    message: '',
    rating: 5,
    screenshot: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission
    console.log('Feedback submitted:', feedback);
    alert('Thank you for your feedback!');
    setFeedback({
      type: 'general',
      message: '',
      rating: 5,
      screenshot: null
    });
  };

  return (
    <div className="feedback">
      <div className="container">
        <header className="feedback-header">
          <h1>Feedback</h1>
          <p>Help us improve by sharing your experience</p>
        </header>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Feedback Type</label>
            <select 
              value={feedback.type}
              onChange={(e) => setFeedback({...feedback, type: e.target.value})}
            >
              <option value="general">General Feedback</option>
              <option value="accuracy">Color Accuracy</option>
              <option value="performance">Performance</option>
              <option value="feature">Feature Request</option>
              <option value="bug">Bug Report</option>
            </select>
          </div>

          <div className="form-group">
            <label>Rating</label>
            <div className="rating">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  className={`star ${star <= feedback.rating ? 'active' : ''}`}
                  onClick={() => setFeedback({...feedback, rating: star})}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Your Feedback</label>
            <textarea
              value={feedback.message}
              onChange={(e) => setFeedback({...feedback, message: e.target.value})}
              placeholder="Tell us about your experience..."
              rows="6"
              required
            />
          </div>

          <div className="form-group">
            <label>Upload Screenshot (Optional)</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => setFeedback({...feedback, screenshot: e.target.files[0]})}
            />
          </div>

          <button type="submit" className="submit-btn">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;