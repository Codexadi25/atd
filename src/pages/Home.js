import React from 'react';
import '../styles/home.css';
import '../styles/animations.css';
import { Link } from 'react-router-dom';
import SEO from "../components/SEO.js";
import { ReactTyped } from "react-typed";
import CarouselCards from '../components/CarouselCards.js';



// const homeCard = [
//   {
//     title: "Business Starter Plan",
//     description: "Kickstart your digital dream — for the price of a pizza. Get a basic site or app with essentials to go online quickly.",
//     details: "Includes: Landing page, contact form, basic analytics",
//     price: "Starting at ₹499/month",
//     tag: "Ideal for: Startups, Freelancers",
//   },
//   {
//     title: "Idea to Product Blueprint",
//     description: "Got an idea but don’t know where to start? We help you validate and shape it into a roadmap.",
//     details: "Includes: MVP strategy, mockups, tech consultation",
//     tag: "Ideal for: Entrepreneurs & Founders",
//   },
//   {
//     title: "E-Commerce Setup & Growth",
//     description: "Launch your online store and sell 24/7 with custom storefronts and secure payment integration.",
//     details: "Includes: Product catalog, payment gateway, responsive UI",
//     tag: "Ideal for: Sellers, Retailers",
//   },
//   {
//     title: "App Development & Automation",
//     description: "We build smart apps that automate processes and enhance user experience across platforms.",
//     details: "Includes: Cross-platform apps, dashboard, automation tools",
//     tag: "Ideal for: SaaS, Content Creators",
//   },
//   {
//     title: "SEO & Online Branding",
//     description: "Boost your presence and build a brand that stands out online through content and design.",
//     details: "Includes: SEO, social media setup, branding kit",
//     tag: "Ideal for: Local businesses, influencers",
//   },
//   {
//     title: "Scalable Web Solutions",
//     description: "From MVP to full-fledged product, we create scalable and secure web apps that grow with you.",
//     details: "Includes: Cloud hosting, APIs, user systems",
//     tag: "Ideal for: SaaS, Enterprises",
//   },
// ];

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
                "Commercial AI Tools",
                "Robust Websites",
                "User friendly WebApps",
                "Powerful Moble Apps",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h1>
          <Link to="/services"><button className="button home-btn">Get Started</button></Link>
        </div>
      </div>
      <div class="homeCards">
        {/* {homeCard.map((item, index) => (
          <div class="card" key={index}>
            <h3 class="cardTitle">{item.title}</h3>
            <p class="cardDescription">{item.description}</p>
            <p class="details">{item.details}</p>
            <p class="price">{item.price}</p>
          </div>
        ))} */}
        <CarouselCards/>
      </div>
    </div>
  )
}

export default Home