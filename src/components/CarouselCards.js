import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@mui/material';
import '../styles/Carousel.css';

const cardsData = [
  {
    title: "Business Starter Plan",
    description: "Kickstart your digital dream — for the price of a pizza.",
    details: "Includes: Landing page, contact form, basic analytics",
    price: "₹499/month",
  },
  {
    title: "Idea to Product Blueprint",
    description: "We help you validate and shape your idea into a roadmap.",
    details: "Includes: MVP strategy, mockups, tech consultation",
    price: "Custom Pricing",
  },
  {
    title: "E-Commerce Setup & Growth",
    description: "Launch your online store and sell 24/7.",
    details: "Includes: Product catalog, payment gateway, responsive UI",
    price: "From ₹1999/month",
  },
  {
    title: "App Development & Automation",
    description: "Smart apps that automate and enhance user experience.",
    details: "Includes: Cross-platform apps, dashboard, automation tools",
    price: "From ₹2999/month",
  },
  {
    title: "SEO & Online Branding",
    description: "Boost your presence and stand out online.",
    details: "Includes: SEO, social media setup, branding kit",
    price: "From ₹999/month",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = cardsData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  const getCard = (offset) => {
    const index = (currentIndex + offset + total) % total;
    return cardsData[index];
  };

  const visibleCards = [
    { ...getCard(-1), position: 'left' },
    { ...getCard(0), position: 'center' },
    { ...getCard(1), position: 'right' }
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-row">
        {visibleCards.map((item, idx) => (
          <Card key={idx} className={`carousel-card ${item.position}`}>
            <CardContent>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.details}</p>
              <p><strong>{item.price}</strong></p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="carousel-dots">
        {cardsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;


