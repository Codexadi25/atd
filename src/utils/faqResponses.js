// utils/faqResponses.js

// Rotating fallback messages for unrecognized/gibberish input
export const fallbackClarifications = [
  "Sorry, I didn't catch that. Could you rephrase?",
  "Hmm, that didn't seem clear. Mind trying again?",
  "Oops, I couldn't understand. Can you say it differently?",
  "I'm not sure I got that. Could you clarify?",
  "Could you please type that again in another way?",
  "That seems unclear. Can you try rewording your question?",
];

const faqResponses = [
  // Greetings
  {
    question: /\b(hi+|hey+|hello+|hii+|heyy+|good\s?(morning|afternoon|evening|day)|what'?s?\s?up|yo+|sup)\b/i,
    answer: "Hello {{user}}, how may I help you?",
  },
  // Pricing
  {
    question: /\b(how much|what('| i)?s? (the )?(price|cost|charge|fee|pricing|rate|amount|plan)s?\b|pricing details|costs?|charges?)\b/i,
    answer: "Our starter plan is as affordable as a pizza 🍕 – just ₹499/month! Want a custom plan?",
  },
  // Free trial/demo
  {
    question: /\b(free (trial|demo|consultation)|can i try|sample|test|demo)\b/i,
    answer: "Yes! We offer a free consultation and demo to understand your business goals.",
  },
  // Services
  {
    question: /\b(what (services|solutions|products) (do you|are you|does your team) (offer|provide|have)|services?|solutions?|offerings?|provide|do you do)\b/i,
    answer: "We offer website & app development, e-commerce solutions, branding, UI/UX design, and automation services.",
  },
  // E-commerce
  {
    question: /\b(e[-\s]?commerce|online (store|shop|business)|webshop|ecom)\b/i,
    answer: "Yes, we build secure and scalable e-commerce platforms with admin panels and payment integration.",
  },
  // SEO
  {
    question: /\b(seo|google (ranking|optimization|search)|search engine|digital marketing|optimi[sz]ation)\b/i,
    answer: "Absolutely! We provide SEO and digital marketing to help your business rank higher on Google.",
  },
  // Branding
  {
    question: /\b(branding|logo|identity|brand design|brand kit|brand strategy)\b/i,
    answer: "Yes, we design logos, build brand identity, and create complete digital branding kits.",
  },
  // Tech stack
  {
    question: /\b(tech(nology)? (stack|used|tools|platforms)|what (tech|technology|stack|tools) do you use|frameworks?|backend|frontend|database)\b/i,
    answer: "We use the MERN stack (MongoDB, Express, React, Node.js), Firebase, and custom APIs for most projects.",
  },
  // Hosting/domain
  {
    question: /\b(hosting|host|domain|ssl|deploy|deployment|website host|buy domain|register domain)\b/i,
    answer: "Yes, we assist with hosting, domains, SSL certificates, and deployment.",
  },
  // Mobile apps
  {
    question: /\b(mobile|android|ios|app|application|cross[-\s]?platform|react native|flutter)\b/i,
    answer: "We develop cross-platform apps using React Native and Flutter.",
  },
  // Startup help
  {
    question: /\b(startup|start[-\s]?up|idea|new business|start (a )?business|launch|entrepreneur)\b/i,
    answer: "Got an idea? We help startups launch fast with our 'starter plan' and dedicated dev team support.",
  },
  // Collaboration
  {
    question: /\b(collaborate|collaboration|partnership|partner|work together|join hands|team up)\b/i,
    answer: "We love collaborations! Let’s grow your vision together. Book a discovery call with us.",
  },
  // Timelines
  {
    question: /\b(time(line)?|duration|how long|delivery|turnaround|when|deadline|how much time|how soon)\b/i,
    answer: "Depending on the project scope, basic websites take 7–15 days, and apps take 3–6 weeks.",
  },
  // Support
  {
    question: /\b(support|help|maintenance|after delivery|post[-\s]?launch|customer care|assist|assistance)\b/i,
    answer: "We provide 24/7 support, regular updates, and maintenance plans after delivery too!",
  },
];

export default faqResponses;
