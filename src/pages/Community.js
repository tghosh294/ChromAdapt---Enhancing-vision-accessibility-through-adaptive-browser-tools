// src/pages/Community.js
import React from 'react';
import './Community.css';

const Community = () => {
  return (
    <div className="community">
      <div className="container">
        <header className="community-header">
          <h1>Community & Blog</h1>
          <p>Share experiences and learn about accessibility</p>
        </header>

        <div className="community-content">
          <section className="blog-section">
            <h2>Latest Articles</h2>
            <div className="blog-grid">
              <article className="blog-card">
                <h3>Designing for Color Blindness</h3>
                <p>Best practices for creating accessible color schemes</p>
                <span>Read More</span>
              </article>
              <article className="blog-card">
                <h3>Understanding WCAG 2.1</h3>
                <p>Complete guide to web content accessibility guidelines</p>
                <span>Read More</span>
              </article>
            </div>
          </section>

          <section className="forum-section">
            <h2>Community Forum</h2>
            <p>Share your experiences and get support from our community</p>
            <div className="forum-preview">
              <p>Forum coming soon! Users will be able to share experiences and tips.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Community;