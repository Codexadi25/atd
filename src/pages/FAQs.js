import { useState } from "react";
import "../styles/faqs.css";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What kind of startups do you work with?",
    answer:
      "We work with early-stage to growth-stage startups in any domain — whether it's fintech, healthtech, edtech, or ecommerce.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes! We provide 30 days of free support post-launch. You can also opt for ongoing monthly maintenance at a reasonable rate.",
  },
  {
    question: "How long does it take to build a website or app?",
    answer:
      "It depends on complexity. Simple websites take 1–2 weeks, while custom apps may take 3–6 weeks with feedback loops.",
  },
  {
    question: "Can I get a quote before starting?",
    answer:
      "Absolutely. We'll understand your requirements first, then provide a detailed quote with pricing and timeline.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we work remotely with clients from around the world. We align with your time zone to ensure smooth communication.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We build with React, Next.js, Node.js, MongoDB, PostgreSQL, Flutter, and cloud platforms like AWS and Firebase — choosing the best stack for your specific requirements.",
  },
  {
    question: "Do you sign NDAs and handle IP?",
    answer:
      "Yes. We sign NDAs before any project discussion and ensure all code, designs, and IP are fully transferred to you upon project completion.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faqs">
      <div className="faqs-container">
        <h2>Frequently Asked <span>Questions</span></h2>
        <p className="faqs-subtitle">
          Everything you need to know about working with Aditya Tech &amp; Devoops.
          Can't find the answer you're looking for?{" "}
          <Link to="/contact" style={{ color: "#0044aa", fontWeight: 600 }}>
            Reach out directly.
          </Link>
        </p>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-card${openIndex === index ? " faq-card--open" : ""}`}
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h4>{item.question}</h4>
              {openIndex === index && <p>{item.answer}</p>}
            </div>
          ))}
        </div>

        <div className="faqs-cta">
          <p>Still have questions? We're happy to walk you through everything in a quick call.</p>
          <Link to="/contact" className="faqs-cta-btn" style={{ textDecoration: "none" }}>
            Talk to Us →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
