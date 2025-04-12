import "../styles/faqs.css";

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
      "It depends on complexity. Simple websites take 1-2 weeks, while custom apps may take 3-6 weeks with feedback loops.",
  },
  {
    question: "Can I get a quote before starting?",
    answer:
      "Absolutely. We’ll understand your requirements first, then provide a detailed quote with pricing and timeline.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we work remotely with clients from around the world. We align with your time zone to ensure smooth communication.",
  },
];

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="faqs-container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div className="faq-card" key={index}>
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
