import "../styles/technologies.css";

const techStack = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Firebase",
  "Redux",
  "Figma",
  "GitHub",
  "Docker",
];

const Technologies = () => {
  return (
    <section className="tech-section">
      <h2>Technologies We Use</h2>
      <div className="tech-grid">
        {techStack.map((tech, index) => (
          <div className="tech-item" key={index}>{tech}</div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
