import "../styles/testimonials.css";

const testimonials = [
  {
    name: "Ravi Sharma",
    position: "Founder, Startify",
    message: "AdityaTechDevoOps helped us launch our product 3x faster with an amazing UI!",
  },
  {
    name: "Pooja Mehta",
    position: "CTO, FinVerse",
    message: "Great team! They built our entire web platform with scalable architecture.",
  },
  {
    name: "Akash Verma",
    position: "Product Manager, HealthTrack",
    message: "Highly professional and prompt. Loved working with the team!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="message">"{item.message}"</p>
            <p className="name">- {item.name}</p>
            <p className="position">{item.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
