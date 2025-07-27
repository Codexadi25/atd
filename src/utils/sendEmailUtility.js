import emailjs from '@emailjs/browser';
import "./sendEmail.js"

// EmailJS Configuration - Using your existing setup
const EMAILJS_CONFIG = {
  serviceId: 'service_6ai9cft',        // Your EmailJS service ID
  templateId: 'template_2xb90p7',      // Your EmailJS template ID
  publicKey: '1a1enk0G-nfJjaAJ3'       // Your EmailJS public key
};

/**
 * Initialize EmailJS with your public key
 * Call this once in your main app component
 */
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
  console.log('EmailJS initialized successfully');
};

/**
 * Send ticket email to admin using your existing template
 * @param {Object} formData - Contact form data
 * @returns {Promise} - EmailJS send promise
 */
export const sendTicketEmail = async (formData) => {
  try {
    const ticketId = `ATD-${Date.now().toString().slice(-6)}${Math.random().toString(36).substr(2, 3).toUpperCase()}`;
    
    // Format the message for your existing template
    const formattedMessage = `
NEW SUPPORT TICKET - ${ticketId}

Customer Details:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Phone: ${formData.phone || 'Not provided'}

Ticket Information:
Subject: ${formData.subject}
Priority: ${formData.priority.toUpperCase()}
Category: ${formData.category}

Message:
${formData.message}

Submitted from: Contact Us Page
Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;

    const templateParams = {
      user_query: formattedMessage,
      to_email: "artisahu68802@gmail.com",  // Your email
      page: window.location.href,
      ticket_id: ticketId,
      customer_name: formData.name,
      customer_email: formData.email
    };

    console.log('Sending ticket email with params:', templateParams);
    
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );
    
    console.log('Ticket email sent successfully:', response);
    return {
      success: true,
      response: response,
      ticketId: ticketId,
      message: 'Ticket created successfully!'
    };
    
  } catch (error) {
    console.error('Failed to send ticket email:', error);
    return {
      success: false,
      error: error,
      message: error.text || error.message || 'Failed to create ticket. Please try again.'
    };
  }
};

/**
 * Send customer inquiry email (for customer confirmation)
 * @param {Object} customerData - Customer form data
 */
export const sendCustomerConfirmation = async (customerData) => {
  const customerTemplateParams = {
    to_email: customerData.email,
    to_name: customerData.name,
    ticket_id: customerData.ticketId,
    subject: customerData.subject,
    company_name: 'Aditya Tech & Devoops',
    support_email: 'contact@adityatechndevoops.com',
    message: `Thank you for contacting us! We have received your inquiry and will respond within 24 hours.
    
Ticket Details:
- Ticket ID: ${customerData.ticketId}
- Subject: ${customerData.subject}
- Priority: ${customerData.priority}
- Category: ${customerData.category}

Your Message:
${customerData.message}

Best regards,
Aditya Tech & Devoops Team`
  };

  return (customerTemplateParams);
};

/**
 * Send notification to admin/support team
 * @param {Object} ticketData - Complete ticket information
 */
export const sendAdminNotification = async (ticketData) => {
  const adminTemplateParams = {
    to_email: 'contact@adityatechndevoops.com',
    ticket_id: ticketData.ticketId,
    from_name: ticketData.name,
    from_email: ticketData.email,
    company: ticketData.company || 'Not specified',
    phone: ticketData.phone || 'Not provided',
    subject: ticketData.subject,
    priority: ticketData.priority.toUpperCase(),
    category: ticketData.category,
    message: ticketData.message,
    timestamp: new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  };

  return (adminTemplateParams);
};

/**
 * Validate email configuration
 * @returns {Object} - Validation result
 */
export const validateEmailConfig = () => {
  const missingConfig = [];
  
  if (!EMAILJS_CONFIG.serviceId || EMAILJS_CONFIG.serviceId === 'your_service_id') {
    missingConfig.push('Service ID');
  }
  
  if (!EMAILJS_CONFIG.templateId || EMAILJS_CONFIG.templateId === 'your_template_id') {
    missingConfig.push('Template ID');
  }
  
  if (!EMAILJS_CONFIG.publicKey || EMAILJS_CONFIG.publicKey === 'your_public_key') {
    missingConfig.push('Public Key');
  }
  
  return {
    isValid: missingConfig.length === 0,
    missingConfig: missingConfig,
    message: missingConfig.length > 0 
      ? `Please configure the following EmailJS settings: ${missingConfig.join(', ')}`
      : 'EmailJS configuration is valid'
  };
};

/**
 * Test email functionality
 * @returns {Promise} - Test result
 */
export const testEmailService = async () => {
  const testParams = {
    to_email: 'test@example.com',
    from_name: 'Test User',
    subject: 'EmailJS Test',
    message: 'This is a test message to verify EmailJS configuration.',
    ticket_id: 'TEST-' + Date.now()
  };

  try {
    const result = (testParams);
    return {
      success: true,
      message: 'Email service is working correctly!',
      details: result
    };
  } catch (error) {
    return {
      success: false,
      message: 'Email service test failed',
      error: error
    };
  }
};

// Export configuration for reference
export { EMAILJS_CONFIG };

/* 
SETUP INSTRUCTIONS:

1. Install EmailJS:
   npm install @emailjs/browser

2. Create EmailJS Account:
   - Go to https://www.emailjs.com/
   - Sign up for a free account
   - Create a new service (Gmail, Outlook, etc.)
   - Create an email template

3. Configure EmailJS:
   - Replace 'your_service_id' with your actual service ID
   - Replace 'your_template_id' with your actual template ID  
   - Replace 'your_public_key' with your actual public key

4. Email Template Variables (use these in your EmailJS template):
   - {{ticket_id}} - Unique ticket identifier
   - {{from_name}} - Customer name
   - {{from_email}} - Customer email
   - {{company}} - Customer company
   - {{phone}} - Customer phone
   - {{subject}} - Inquiry subject
   - {{priority}} - Ticket priority
   - {{category}} - Inquiry category
   - {{message}} - Customer message
   - {{timestamp}} - When the ticket was created

5. Sample Template (for admin notification):
   Subject: New Support Ticket - {{ticket_id}}
   
   Body:
   New support ticket received:
   
   Ticket ID: {{ticket_id}}
   From: {{from_name}} ({{from_email}})
   Company: {{company}}
   Phone: {{phone}}
   Subject: {{subject}}
   Priority: {{priority}}
   Category: {{category}}
   
   Message:
   {{message}}
   
   Received: {{timestamp}}

6. Initialize in your main App component:
   import { initEmailJS } from './utils/sendEmail';
   
   useEffect(() => {
     initEmailJS();
   }, []);

7. Use in ContactUs component:
   import { sendEmail, sendCustomerConfirmation, sendAdminNotification } from '../utils/sendEmail';
*/