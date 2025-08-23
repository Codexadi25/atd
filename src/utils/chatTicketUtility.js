import emailjs from '@emailjs/browser';

import { getEmailJSConfig } from '../config/emailjs.config.js';

const config = getEmailJSConfig();
const CHATBOT_EMAILJS_CONFIG = {
  serviceId: config.CHATBOT.serviceId,
  templateId: config.CHATBOT.templateId,
  publicKey: config.publicKey
};

export const initChatBotEmailJS = () => {
  // EmailJS is now initialized centrally in App.js
  console.log('ChatBot EmailJS utility ready - using service:', CHATBOT_EMAILJS_CONFIG.serviceId, 'template:', CHATBOT_EMAILJS_CONFIG.templateId);
};

export const sendChatTicketEmail = async (chatData) => {
  try {
    console.log('🚀 Chat Bot: Starting email send process...');
    console.log('🚀 Chat Bot: Config:', CHATBOT_EMAILJS_CONFIG);
    console.log('🚀 Chat Bot: Chat data:', chatData);
    
    // Validate required user information
    if (!chatData.userName || !chatData.userEmail || !chatData.userPhone) {
      return {
        success: false,
        error: 'Missing user information',
        message: 'Please provide your name, email, and phone number to raise a ticket for the issues raised.',
        requiresUserInfo: true
      };
    }
    
    const ticketId = `ATD-CHAT-${Date.now().toString().slice(-6)}${Math.random().toString(36).substr(2, 3).toUpperCase()}`;
    
    const formattedMessage = `
NEW CHAT SUPPORT TICKET - ${ticketId}

Chat Session Details:
User Query: ${chatData.userQuery || 'Not provided'}
Chat History: ${chatData.chatHistory || 'Not available'}
Session Duration: ${chatData.sessionDuration || 'Not tracked'}

User Information:
Name: ${chatData.userName}
Email: ${chatData.userEmail}
Phone: ${chatData.userPhone}

Issue Category: ${chatData.category || 'General'}
Priority: ${chatData.priority || 'Medium'}
Status: ${chatData.status || 'Open'}

Additional Notes:
${chatData.additionalNotes || 'No additional notes'}

Submitted from: Chat Bot Interface
Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;

    const templateParams = {
      user_query: formattedMessage,
      to_email: "professionaladitya25@gmail.com", // Escalation desk email
      page: window.location.href,
      ticket_id: ticketId,
      customer_name: chatData.userName,
      customer_email: chatData.userEmail,
      customer_phone: chatData.userPhone,
      chat_session: chatData.userQuery || 'Chat initiated',
      priority: chatData.priority || 'Medium',
      category: chatData.category || 'General'
    };

    console.log('📧 Chat Bot: Sending email with params:', templateParams);
    console.log('📧 Chat Bot: Using Chat Bot Service ID:', CHATBOT_EMAILJS_CONFIG.serviceId);
    console.log('📧 Chat Bot: Using Chat Bot Template ID:', CHATBOT_EMAILJS_CONFIG.templateId);
    console.log('📧 Chat Bot: Using Public Key:', CHATBOT_EMAILJS_CONFIG.publicKey);
    
    const response = await emailjs.send(
      CHATBOT_EMAILJS_CONFIG.serviceId,
      CHATBOT_EMAILJS_CONFIG.templateId,
      templateParams,
      CHATBOT_EMAILJS_CONFIG.publicKey
    );
    
    console.log('✅ Chat Bot: Email sent successfully:', response);
    return {
      success: true,
      response: response,
      ticketId: ticketId,
      message: 'Chat ticket created successfully!'
    };
    
  } catch (error) {
    console.error('❌ Chat Bot: Failed to send email:', error);
    return {
      success: false,
      error: error,
      message: error.text || error.message || 'Failed to create chat ticket. Please try again.'
    };
  }
};

export const sendChatUserConfirmation = async (userData) => {
  try {
    const userTemplateParams = {
      to_email: userData.userEmail,
      to_name: userData.userName || 'Valued Customer',
      ticket_id: userData.ticketId,
      subject: `Chat Support Ticket - ${userData.ticketId}`,
      message: `Your chat support ticket has been created successfully. We'll get back to you within 24-48 hours.`,
      company_name: 'Team Aditya Tech & Devoops',
      support_email: 'contact@adityatechndevoops.com',
      ticket_status: 'Open',
      estimated_response: '24-48 hours'
    };

    const response = await emailjs.send(
      CHATBOT_EMAILJS_CONFIG.serviceId,
      CHATBOT_EMAILJS_CONFIG.templateId,
      userTemplateParams,
      CHATBOT_EMAILJS_CONFIG.publicKey
    );

    console.log('Chat user confirmation sent:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Failed to send chat user confirmation:', error);
    return { success: false, error };
  }
};

export const validateChatBotEmailConfig = () => {
  const missingConfig = [];
  
  if (!CHATBOT_EMAILJS_CONFIG.serviceId) missingConfig.push('ChatBot Service ID');
  if (!CHATBOT_EMAILJS_CONFIG.templateId) missingConfig.push('ChatBot Template ID');
  if (!CHATBOT_EMAILJS_CONFIG.publicKey) missingConfig.push('Public Key');
  
  return {
    isValid: missingConfig.length === 0,
    missingConfig: missingConfig,
    message: missingConfig.length > 0 
      ? `Please configure the following ChatBot EmailJS settings: ${missingConfig.join(', ')}`
      : 'ChatBot EmailJS configuration is valid'
  };
};

export { CHATBOT_EMAILJS_CONFIG };
