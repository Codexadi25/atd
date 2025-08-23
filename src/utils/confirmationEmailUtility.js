import emailjs from '@emailjs/browser';
import { getEmailJSConfig } from '../config/emailjs.config.js';

const config = getEmailJSConfig();
const CONFIRMATION_EMAILJS_CONFIG = {
  serviceId: config.CONFIRMATION.serviceId,
  templateId: config.CONFIRMATION.templateId,
  publicKey: config.publicKey
};

/**
 * Send confirmation email from escalation desk to Contact Form user
 * @param {Object} userData - User data from contact form
 * @param {string} userData.name - User's name
 * @param {string} userData.email - User's email address
 * @param {string} userData.ticketId - Generated ticket ID
 * @param {string} userData.subject - Inquiry subject
 * @param {string} userData.category - Inquiry category
 * @param {string} userData.priority - Inquiry priority
 * @param {string} userData.message - User's message
 * @returns {Object} Result of email sending operation
 */
export const sendContactFormConfirmation = async (userData) => {
  try {
    console.log('📧 Contact Form Confirmation: Starting escalation desk confirmation...');
    console.log('📧 Contact Form Confirmation: Config:', CONFIRMATION_EMAILJS_CONFIG);
    console.log('📧 Contact Form Confirmation: User data:', userData);

    // Check if EmailJS is available
    if (typeof emailjs === 'undefined') {
      console.error('❌ Contact Form Confirmation: EmailJS is not available!');
      return {
        success: false,
        error: 'EmailJS not available',
        message: 'EmailJS library not loaded. Please refresh the page and try again.'
      };
    }

    const confirmationMessage = `
Dear ${userData.name},

Thank you for contacting Aditya Tech & Devoops. We have successfully received your inquiry and created a support ticket for you.

📋 **Ticket Details:**
• Ticket ID: ${userData.ticketId}
• Subject: ${userData.subject}
• Category: ${userData.category}
• Priority: ${userData.priority.toUpperCase()}
• Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

💬 **Your Message:**
${userData.message}

⏰ **Response Time:**
Our escalation desk has been notified and will review your inquiry. You can expect a detailed response within 24-48 hours.

📞 **Need Immediate Assistance?**
If this is an urgent matter, please contact us directly at:
• Phone: +91-XXXXXXXXXX
• Email: contact@adityatechndevoops.com

🔍 **Track Your Ticket:**
You can reference this ticket ID (${userData.ticketId}) for any follow-up communications.

Best regards,
Team Aditya Tech & Devoops
Escalation Desk
    `;

    const templateParams = {
      user_query: confirmationMessage,
      to_email: userData.email, // Send to user's email
      to_name: userData.name,
      page: window.location.href,
      ticket_id: userData.ticketId,
      customer_name: userData.name,
      customer_email: userData.email,
      subject: `Contact Form Confirmation - ${userData.ticketId}`,
      message: confirmationMessage,
      company_name: 'Aditya Tech & Devoops',
      support_email: 'contact@adityatechndevoops.com',
      inquiry_subject: userData.subject,
      inquiry_category: userData.category,
      priority: userData.priority.toUpperCase(),
      estimated_response: '24-48 hours'
    };

    console.log('📧 Contact Form Confirmation: Sending confirmation email with params:', templateParams);
    console.log('📧 Contact Form Confirmation: Using Confirmation Service ID:', CONFIRMATION_EMAILJS_CONFIG.serviceId);
    console.log('📧 Contact Form Confirmation: Using Confirmation Template ID:', CONFIRMATION_EMAILJS_CONFIG.templateId);

    const response = await emailjs.send(
      CONFIRMATION_EMAILJS_CONFIG.serviceId,
      CONFIRMATION_EMAILJS_CONFIG.templateId,
      templateParams,
      CONFIRMATION_EMAILJS_CONFIG.publicKey
    );

    console.log('✅ Contact Form Confirmation: Confirmation email sent successfully:', response);
    return {
      success: true,
      response: response,
      message: 'Contact form confirmation email sent successfully!'
    };

  } catch (error) {
    console.error('❌ Contact Form Confirmation: Failed to send confirmation email:', error);
    console.error('❌ Contact Form Confirmation: Error details:', {
      message: error.message,
      text: error.text,
      stack: error.stack
    });
    return {
      success: false,
      error: error,
      message: error.text || error.message || 'Failed to send confirmation email. Please try again.'
    };
  }
};

/**
 * Send confirmation email from escalation desk to Chat Bot user
 * @param {Object} userData - User data from chat bot
 * @param {string} userData.userName - User's name
 * @param {string} userData.userEmail - User's email address
 * @param {string} userData.userPhone - User's phone number
 * @param {string} userData.ticketId - Generated ticket ID
 * @param {string} userData.userQuery - User's original query
 * @param {string} userData.category - Issue category
 * @param {string} userData.priority - Issue priority
 * @returns {Object} Result of email sending operation
 */
export const sendChatBotConfirmation = async (userData) => {
  try {
    console.log('📧 Chat Bot Confirmation: Starting escalation desk confirmation...');
    console.log('📧 Chat Bot Confirmation: Config:', CONFIRMATION_EMAILJS_CONFIG);
    console.log('📧 Chat Bot Confirmation: User data:', userData);

    // Check if EmailJS is available
    if (typeof emailjs === 'undefined') {
      console.error('❌ Chat Bot Confirmation: EmailJS is not available!');
      return {
        success: false,
        error: 'EmailJS not available',
        message: 'EmailJS library not loaded. Please refresh the page and try again.'
      };
    }

    const confirmationMessage = `
Dear ${userData.userName},

Thank you for reaching out to Aditya Tech & Devoops through our Chat Bot. We have successfully created a support ticket for your inquiry.

📋 **Ticket Details:**
• Ticket ID: ${userData.ticketId}
• Category: ${userData.category}
• Priority: ${userData.priority}
• Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

💬 **Your Query:**
${userData.userQuery}

📱 **Contact Information:**
• Name: ${userData.userName}
• Email: ${userData.userEmail}
• Phone: ${userData.userPhone}

⏰ **Response Time:**
Our escalation desk has been notified and will review your inquiry. You can expect a detailed response within 24-48 hours.

📞 **Need Immediate Assistance?**
If this is an urgent matter, please contact us directly at:
• Phone: +91-XXXXXXXXXX
• Email: contact@adityatechndevoops.com

🔍 **Track Your Ticket:**
You can reference this ticket ID (${userData.ticketId}) for any follow-up communications.

💡 **Chat Bot Tip:**
You can always return to our chat bot for quick answers to common questions or to raise new tickets.

Best regards,
Team Aditya Tech & Devoops
Escalation Desk
    `;

    const templateParams = {
      user_query: confirmationMessage,
      to_email: userData.userEmail, // Send to user's email
      to_name: userData.userName,
      page: window.location.href,
      ticket_id: userData.ticketId,
      customer_name: userData.userName,
      customer_email: userData.userEmail,
      customer_phone: userData.userPhone,
      subject: `Chat Bot Support Ticket - ${userData.ticketId}`,
      message: confirmationMessage,
      company_name: 'Aditya Tech & Devoops',
      support_email: 'contact@adityatechndevoops.com',
      chat_query: userData.userQuery,
      category: userData.category,
      priority: userData.priority,
      estimated_response: '24-48 hours'
    };

    console.log('📧 Chat Bot Confirmation: Sending confirmation email with params:', templateParams);
    console.log('📧 Chat Bot Confirmation: Using Confirmation Service ID:', CONFIRMATION_EMAILJS_CONFIG.serviceId);
    console.log('📧 Chat Bot Confirmation: Using Confirmation Template ID:', CONFIRMATION_EMAILJS_CONFIG.templateId);

    const response = await emailjs.send(
      CONFIRMATION_EMAILJS_CONFIG.serviceId,
      CONFIRMATION_EMAILJS_CONFIG.templateId,
      templateParams,
      CONFIRMATION_EMAILJS_CONFIG.publicKey
    );

    console.log('✅ Chat Bot Confirmation: Confirmation email sent successfully:', response);
    return {
      success: true,
      response: response,
      message: 'Chat bot confirmation email sent successfully!'
    };

  } catch (error) {
    console.error('❌ Chat Bot Confirmation: Failed to send confirmation email:', error);
    console.error('❌ Chat Bot Confirmation: Error details:', {
      message: error.message,
      text: error.text,
      stack: error.stack
    });
    return {
      success: false,
      error: error,
      message: error.text || error.message || 'Failed to send confirmation email. Please try again.'
    };
  }
};

/**
 * Validate confirmation email configuration
 * @returns {Object} Configuration validation result
 */
export const validateConfirmationEmailConfig = () => {
  const missingConfig = [];
  
  if (!CONFIRMATION_EMAILJS_CONFIG.serviceId) missingConfig.push('Confirmation Service ID');
  if (!CONFIRMATION_EMAILJS_CONFIG.templateId) missingConfig.push('Confirmation Template ID');
  if (!CONFIRMATION_EMAILJS_CONFIG.publicKey) missingConfig.push('Public Key');
  
  return {
    isValid: missingConfig.length === 0,
    missingConfig: missingConfig,
    message: missingConfig.length > 0 
      ? `Please configure the following Confirmation EmailJS settings: ${missingConfig.join(', ')}`
      : 'Confirmation EmailJS configuration is valid'
  };
};

export { CONFIRMATION_EMAILJS_CONFIG };
