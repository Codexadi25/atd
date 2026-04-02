// EmailJS Configuration
// Update these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Chat Bot Ticket Raising Configuration
  CHATBOT: {
    serviceId: 'service_XXXX',
    templateId: 'template_YYYYY'
  },
  
  // Contact Us Form Configuration
  CONTACT: {
    serviceId: 'service_XXXX',
    templateId: 'template_YYYYY'
  },
  
  // User Confirmation Email Configuration (from escalation desk)
  CONFIRMATION: {
    serviceId: 'service_XXXX',
    templateId: 'template_YYYYY' // Using same template for now, can be customized
  },
  
  // Public Key (same for all services)
  publicKey: '1a1enk0G'
};

// Environment variable overrides (if .env file is available)
export const getEmailJSConfig = () => {
  // Global fallbacks (kept for safety)
  const GLOBAL_SERVICE_FALLBACK = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_b9ecwpr';
  const GLOBAL_TEMPLATE_FALLBACK = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_30xzw1h';
  const PUBLIC_KEY_FALLBACK = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '1a1enk0G-nfJjaAJ3';

  // Chatbot template is the canonical template for both BOT and CONFIRMATION (per request)
  const CHATBOT_TEMPLATE = process.env.REACT_APP_CHATBOT_TEMPLATE_ID || GLOBAL_TEMPLATE_FALLBACK;

  return {
    CHATBOT: {
      serviceId: process.env.REACT_APP_CHATBOT_SERVICE_ID || GLOBAL_SERVICE_FALLBACK,
      templateId: CHATBOT_TEMPLATE
    },
    CONTACT: {
      serviceId: process.env.REACT_APP_CONTACT_SERVICE_ID || GLOBAL_SERVICE_FALLBACK,
      templateId: process.env.REACT_APP_CONTACT_TEMPLATE_ID || GLOBAL_TEMPLATE_FALLBACK
    },
    CONFIRMATION: {
      // CONFIRMATION.templateId intentionally uses CHATBOT_TEMPLATE so both templates are the same
      serviceId: process.env.REACT_APP_CONFIRMATION_SERVICE_ID || GLOBAL_SERVICE_FALLBACK,
      templateId: CHATBOT_TEMPLATE
    },
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || PUBLIC_KEY_FALLBACK
  };
};
