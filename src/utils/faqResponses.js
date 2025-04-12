// utils/faqResponses.js
const faqResponses = [
  // 💰 Pricing
  // {
  //   question: /\b(what|tell me|do you have).*(services?|pricing|cost)/i
  // },
  {
    question: /Hi|HI|Hey|[h][H]ello/i,
    answer: "Hello {{user}}, how may I help you?"
  },
  {
    question: /pricing|cost|charge|fees|price/i,
    answer: "Our starter plan is as affordable as a pizza 🍕 – just ₹499/month! Want a custom plan?",
  },
  {
    question: /free trial|demo/i,
    answer: "Yes! We offer a free consultation and demo to understand your business goals.",
  },

  // 💻 Services
  {
    question: /services|offer|provide/i,
    answer: "We offer website & app development, e-commerce solutions, branding, UI/UX design, and automation services.",
  },
  {
    question: /e[-\s]?commerce/i,
    answer: "Yes, we build secure and scalable e-commerce platforms with admin panels and payment integration.",
  },
  {
    question: /seo|google ranking|optimization/i,
    answer: "Absolutely! We provide SEO and digital marketing to help your business rank higher on Google.",
  },
  {
    question: /branding|logo|identity/i,
    answer: "Yes, we design logos, build brand identity, and create complete digital branding kits.",
  },

  // 🛠 Technical
  {
    question: /tech stack|technologies|tools/i,
    answer: "We use the MERN stack (MongoDB, Express, React, Node.js), Firebase, and custom APIs for most projects.",
  },
  {
    question: /hosting|domain/i,
    answer: "Yes, we assist with hosting, domains, SSL certificates, and deployment.",
  },
  {
    question: /mobile|android|ios|app/i,
    answer: "We develop cross-platform apps using React Native and Flutter.",
  },

  // 🚀 Startup Help
  {
    question: /startup|idea|new business|start/i,
    answer: "Got an idea? We help startups launch fast with our 'starter plan' and dedicated dev team support.",
  },
  {
    question: /collaborate|partnership|work together/i,
    answer: "We love collaborations! Let’s grow your vision together. Book a discovery call with us.",
  },

  // 🕓 Timelines
  {
    question: /time|duration|how long/i,
    answer: "Depending on the project scope, basic websites take 7–15 days, and apps take 3–6 weeks.",
  },

  // 👨‍💻 Support
  {
    question: /support|help|maintenance|after delivery/i,
    answer: "We provide 24/7 support, regular updates, and maintenance plans after delivery too!",
  },
];

export default faqResponses;
