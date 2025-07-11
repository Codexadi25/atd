import React from 'react';
import '../styles/home.css';
import '../styles/animations.css';
import { Link } from 'react-router-dom';
import SEO from "../components/SEO.js";
import { ReactTyped } from "react-typed";
import CarouselCards from '../components/CarouselCards.js';


function Home() {

  return (
    <div className='home container text-center py-10'>
      <SEO
        title="Aditya Tech. & Devoops. - Transforming Startups"
        description="We create software, web apps, and websites for startups to scale their businesses."
      />
      <div class="headComponent">
        <div class="home-hero">
          <h1 className="typingContainer">
            <span>Scale your business with &nbsp;</span><ReactTyped className='typing'
              strings={[
                "Scalable Mobile Apps",
                "Commercial AI Tools",
                "User friendly WebApps",
                "Robust Websites",
              ]}
              typeSpeed={30}
              backSpeed={30}
              backDelay={1500}
              loop
            />
          </h1>
          <Link to="/services"><button className="button home-btn">Get Started</button></Link>
        </div>
      </div>
      <div class="homeCards">
        <CarouselCards/>
      </div>
    </div>
  )
}

export default Home