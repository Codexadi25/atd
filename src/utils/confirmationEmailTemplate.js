// confirmationEmailTemplate.js - Customer confirmation email utility

import emailjs from '@emailjs/browser';
import { getEmailJSConfig } from '../config/emailjs.config';

const CONFIRMATION_CONFIG = getEmailJSConfig().CONFIRMATION;
const EMAILJS_PUBLIC_KEY = getEmailJSConfig().publicKey;

/**
 * Send confirmation email to customer
 * @param {Object} customerData - Customer information and ticket details
 * @returns {Promise} - EmailJS send promise
 */
export const sendCustomerConfirmation = async (customerData) => {
  try {
    const confirmationMessage = `
Dear ${customerData.name},

Thank you for contacting Aditya Tech & Devoops! We have successfully received your inquiry and created a support ticket for you.

TICKET DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ticket ID: ${customerData.ticketId}
Subject: ${customerData.subject}
Priority: ${customerData.priority.toUpperCase()}
Category: ${customerData.category}
Status: OPEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your Message:
${customerData.message}

WHAT HAPPENS NEXT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Our team will review your inquiry within 24 hours
• You'll receive updates via email as we work on your ticket
• For urgent matters, please call us at +91 9876543210

CONTACT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email: contact@adityatechndevoops.com
📞 Phone: +91 9876543210
🕒 Business Hours: Mon-Fri 9 AM - 6 PM IST
🌐 Website: https://adityatechndevoops.web.app

Thank you for choosing Aditya Tech & Devoops for your digital solutions!

Best regards,
Aditya Tech & Devoops Team
AI Digital Solutions for Modern Businesses
    `;

    const templateParams = {
      to_email: customerData.email,
      to_name: customerData.name,
      ticket_id: customerData.ticketId,
      subject: `Ticket Confirmation - ${customerData.ticketId}`,
      message: confirmationMessage,
      company_name: 'Aditya Tech & Devoops',
      support_email: 'contact@adityatechndevoops.com'
    };

    console.log('Sending confirmation email to:', customerData.email);

    const response = await emailjs.send(
      CONFIRMATION_CONFIG.serviceId,
      CONFIRMATION_CONFIG.templateId,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Confirmation email sent successfully:', response);
    return {
      success: true,
      response: response,
      message: 'Confirmation email sent successfully!'
    };

  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    
    // Don't fail the main ticket creation if confirmation email fails
    console.warn('Confirmation email failed, but ticket was created successfully');
    return {
      success: false,
      error: error,
      message: 'Ticket created but confirmation email failed. You will still receive support.'
    };
  }
};

/**
 * Alternative method: Use your existing template for confirmation
 * This sends confirmation using your current template setup
 */
export const sendConfirmationViaExistingTemplate = async (customerData) => {
  try {
    const confirmationQuery = `
TICKET CONFIRMATION FOR CUSTOMER

Ticket ID: ${customerData.ticketId}

Dear ${customerData.name},

This is to confirm that we have received your support request. Our team will respond within 24 hours.

Original Message:
${customerData.message}

Contact: ${customerData.email}
Phone: ${customerData.phone || 'Not provided'}
Company: ${customerData.company || 'Not specified'}

Thank you for choosing Aditya Tech & Devoops!

---
This is a customer confirmation email sent from the Contact Us page.
    `;

    const templateParams = {
      user_query: confirmationQuery,
      to_email: customerData.email,  // Send to customer instead of admin
      page: 'Contact Us - Customer Confirmation',
      ticket_id: customerData.ticketId
    };

    const response = await emailjs.send(
      'service_6ai9cft',
      'template_2xb90p7',
      templateParams,
      '1a1enk0G-nfJjaAJ3'
    );

    return {
      success: true,
      response: response,
      message: 'Confirmation sent to customer!'
    };

  } catch (error) {
    console.error('Failed to send customer confirmation:', error);
    return {
      success: false,
      error: error,
      message: 'Failed to send confirmation email'
    };
  }
};

export default sendCustomerConfirmation;