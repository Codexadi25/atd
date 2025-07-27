import React from 'react'
import "../styles/about.css";

function About(){
  return (
    <div className="about">
      <div className="aboutContainer">
        <h2>About Us</h2>
        <p className="tagline">
          We're more than just developers — we're partners in your growth.
        </p>

        <div className="aboutContent">
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
    </div>
  );
};

export default About;
