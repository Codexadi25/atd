import React from 'react'
import "../styles/about.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p className="tagline">
          We're more than just developers — we're partners in your growth.
        </p>

        <div className="about-content">
          <p>
            At <strong>Aditya Tech. & Devoops</strong>, we specialize in building robust, scalable, and beautiful
            digital solutions that empower startups to succeed. From ideation to deployment, we bring ideas
            to life with technology that works.
          </p>

          <p>
            Whether you're launching a new product or upgrading your digital presence, our team is dedicated
            to delivering software, web apps, and websites that reflect your vision and engage your audience.
          </p>

          <p>
            With a startup-friendly approach and a deep understanding of business needs, we don't just code —
            we collaborate, innovate, and grow with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
