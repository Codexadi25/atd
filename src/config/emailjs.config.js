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
  publicKey: '1a1enk0G-PPPPPPP'
};

// Environment variable overrides (if .env file is available)
export const getEmailJSConfig = () => {
  return {
    CHATBOT: {
      serviceId: process.env.REACT_APP_CHATBOT_SERVICE_ID || EMAILJS_CONFIG.CHATBOT.serviceId,
      templateId: process.env.REACT_APP_CHATBOT_TEMPLATE_ID || EMAILJS_CONFIG.CHATBOT.templateId
    },
    CONTACT: {
      serviceId: process.env.REACT_APP_CONTACT_SERVICE_ID || EMAILJS_CONFIG.CONTACT.serviceId,
      templateId: process.env.REACT_APP_CONTACT_TEMPLATE_ID || EMAILJS_CONFIG.CONTACT.templateId
    },
    CONFIRMATION: {
      serviceId: process.env.REACT_APP_CONFIRMATION_SERVICE_ID || EMAILJS_CONFIG.CONFIRMATION.serviceId,
      templateId: process.env.REACT_APP_CHATBOT_TEMPLATE_ID || EMAILJS_CONFIG.CONFIRMATION.templateId
    },
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || EMAILJS_CONFIG.publicKey
  };
};
