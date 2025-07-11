import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Carousel.css";

const slides = [
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
  {
    title: "Custom SaaS Platform Build",
    description: "Your idea, our code — built to scale and serve.",
    details: "Includes: Full-stack development, cloud integration, admin panel",
    price: "Starts at ₹4999/month",
  },
  {
    title: "Brand Identity & UI/UX Package",
    description: "Design that speaks your brand's language.",
    details: "Includes: Logo, color palette, UI kit, wireframes",
    price: "Flat ₹2999/project",
  }
];

export default function SlideCarousel() {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

  const getSlide = (offset) => {
    const i = (index + offset + total) % total;
    return slides[i];
  };

  const scaleAndBlur = [0.6, 0.8, 1, 0.8, 0.6];
  const blurLevels = ["4px", "2px", "0px", "2px", "4px"];

  return (
    <div className="carousel-container">
      <AnimatePresence initial={false}>
        {[-2, -1, 0, 1, 2].map((offset, i) => {
          const slide = getSlide(offset);
          const scale = scaleAndBlur[i];
          const blur = blurLevels[i];
          return (
            <motion.div
              key={slide.title}
              className="card"
              initial={{ opacity: 0, scale: 0.6, x: offset * 100 }}
              animate={{
                scale,
                x: offset * 200,
                filter: `blur(${blur})`,
                zIndex: 5 - Math.abs(offset),
                opacity: 1,
              }}
              exit={{ opacity: 0, scale: 0.6, x: offset < 0 ? -200 : 200 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <small>{slide.details}</small>
              <br/>
              <strong>{slide.price}</strong>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
