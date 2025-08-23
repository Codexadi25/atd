import emailjs from '@emailjs/browser';

import { getEmailJSConfig } from '../config/emailjs.config.js';

const config = getEmailJSConfig();
const CONTACT_EMAILJS_CONFIG = {
  serviceId: config.CONTACT.serviceId,
  templateId: config.CONTACT.templateId,
  publicKey: config.publicKey
};

export const initContactEmailJS = () => {
  // EmailJS is now initialized centrally in App.js
  console.log('Contact EmailJS utility ready - using service:', CONTACT_EMAILJS_CONFIG.serviceId, 'template:', CONTACT_EMAILJS_CONFIG.templateId);
};

export const sendContactFormEmail = async (formData) => {
  try {
    console.log('🚀 Contact Form: Starting email send process...');
    console.log('🚀 Contact Form: Config:', CONTACT_EMAILJS_CONFIG);
    console.log('🚀 Contact Form: Form data:', formData);
    
    const ticketId = `ATD-CONTACT-${Date.now().toString().slice(-6)}${Math.random().toString(36).substr(2, 3).toUpperCase()}`;
    
    const formattedMessage = `
NEW CONTACT FORM SUBMISSION - ${ticketId}

Customer Details:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Phone: ${formData.phone || 'Not provided'}

Inquiry Information:
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
      to_email: "artisahu68802@gmail.com", // Escalation desk email
      page: window.location.href,
      ticket_id: ticketId,
      customer_name: formData.name,
      customer_email: formData.email,
      company: formData.company || 'Not specified',
      phone: formData.phone || 'Not provided',
      subject: formData.subject,
      priority: formData.priority.toUpperCase(),
      category: formData.category,
      message: formData.message
    };

    console.log('📧 Contact Form: Sending email with params:', templateParams);
    console.log('📧 Contact Form: Using Contact Service ID:', CONTACT_EMAILJS_CONFIG.serviceId);
    console.log('📧 Contact Form: Using Contact Template ID:', CONTACT_EMAILJS_CONFIG.templateId);
    console.log('📧 Contact Form: Using Public Key:', CONTACT_EMAILJS_CONFIG.publicKey);
    
    // Check if EmailJS is available
    if (typeof emailjs === 'undefined') {
      console.error('❌ Contact Form: EmailJS is not available!');
      return {
        success: false,
        error: 'EmailJS not available',
        message: 'EmailJS library not loaded. Please refresh the page and try again.'
      };
    }
    
    const response = await emailjs.send(
      CONTACT_EMAILJS_CONFIG.serviceId,
      CONTACT_EMAILJS_CONFIG.templateId,
      templateParams,
      CONTACT_EMAILJS_CONFIG.publicKey
    );
    
    console.log('✅ Contact Form: Email sent successfully:', response);
    return {
      success: true,
      response: response,
      ticketId: ticketId,
      message: 'Contact form submitted successfully!'
    };
    
  } catch (error) {
    console.error('❌ Contact Form: Failed to send email:', error);
    console.error('❌ Contact Form: Error details:', {
      message: error.message,
      text: error.text,
      stack: error.stack
    });
    return {
      success: false,
      error: error,
      message: error.text || error.message || 'Failed to submit contact form. Please try again.'
    };
  }
};

export const sendContactConfirmation = async (customerData) => {
  try {
    console.log('📧 Contact Confirmation: Sending customer confirmation...');
    
    const customerTemplateParams = {
      to_email: customerData.email,
      to_name: customerData.name,
      ticket_id: customerData.ticketId,
      subject: `Contact Form Confirmation - ${customerData.ticketId}`,
      message: `Thank you for contacting us. We have received your inquiry and will get back to you within 24-48 hours.`,
      company_name: 'Aditya Tech & Devoops',
      support_email: 'contact@adityatechndevoops.com',
      inquiry_subject: customerData.subject,
      inquiry_category: customerData.category,
      estimated_response: '24-48 hours'
    };

    const response = await emailjs.send(
      CONTACT_EMAILJS_CONFIG.serviceId,
      CONTACT_EMAILJS_CONFIG.templateId,
      customerTemplateParams,
      CONTACT_EMAILJS_CONFIG.publicKey
    );

    console.log('✅ Contact Confirmation: Sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('❌ Contact Confirmation: Failed to send:', error);
    return { success: false, error };
  }
};

export const sendAdminContactNotification = async (contactData) => {
  try {
    const adminTemplateParams = {
      to_email: 'professionaladitya25@gmail.com',
      ticket_id: contactData.ticketId,
      from_name: contactData.name,
      from_email: contactData.email,
      company: contactData.company || 'Not specified',
      phone: contactData.phone || 'Not provided',
      subject: contactData.subject,
      priority: contactData.priority.toUpperCase(),
      category: contactData.category,
      message: contactData.message,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    const response = await emailjs.send(
      CONTACT_EMAILJS_CONFIG.serviceId,
      CONTACT_EMAILJS_CONFIG.templateId,
      adminTemplateParams,
      CONTACT_EMAILJS_CONFIG.publicKey
    );

    console.log('Admin contact notification sent:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Failed to send admin contact notification:', error);
    return { success: false, error };
  }
};

export const validateContactEmailConfig = () => {
  const missingConfig = [];
  
  if (!CONTACT_EMAILJS_CONFIG.serviceId) missingConfig.push('Contact Service ID');
  if (!CONTACT_EMAILJS_CONFIG.templateId) missingConfig.push('Contact Template ID');
  if (!CONTACT_EMAILJS_CONFIG.publicKey) missingConfig.push('Public Key');
  
  return {
    isValid: missingConfig.length === 0,
    missingConfig: missingConfig,
    message: missingConfig.length > 0 
      ? `Please configure the following Contact EmailJS settings: ${missingConfig.join(', ')}`
      : 'Contact EmailJS configuration is valid'
  };
};

export { CONTACT_EMAILJS_CONFIG };
