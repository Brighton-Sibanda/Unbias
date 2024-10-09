import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-content">
        <h1>About Unbias</h1>
        <p className="tagline">Empowering decisions through diverse perspectives</p>
        
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At Unbias, we believe that the best decisions are made when considering multiple viewpoints. 
            Our platform is designed to provide you with advice and insights from various perspectives, 
            helping you make more informed and balanced choices.
          </p>
        </section>

        <section className="how-it-works-section">
          <h2>How It Works</h2>
          <ol>
            <li>Choose your perspective preference: optimistic, factual, or pessimistic.</li>
            <li>Enter your profession or area of interest.</li>
            <li>Receive tailored advice from multiple viewpoints.</li>
            <li>Compare and contrast different perspectives to make your decision.</li>
          </ol>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <p>
            Unbias was founded by a diverse group of thinkers, technologists, and problem-solvers. 
            We're united by our passion for promoting understanding and critical thinking in decision-making processes.
          </p>
        </section>

        <section className="contact-section">
          <h2>Get in Touch</h2>
          <p>
            Have questions or feedback? We'd love to hear from you! 
            Reach out to us at <a href="mailto:contact@unbias.com">contact@unbias.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}