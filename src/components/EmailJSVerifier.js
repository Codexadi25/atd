import React, { useState, useEffect } from 'react';
import { getEmailJSConfig } from '../config/emailjs.config.js';
import { validateContactEmailConfig } from '../utils/contactUsUtility';
import { validateChatBotEmailConfig } from '../utils/chatTicketUtility';

const EmailJSVerifier = () => {
  const [config, setConfig] = useState(null);
  const [contactValidation, setContactValidation] = useState(null);
  const [chatValidation, setChatValidation] = useState(null);

  useEffect(() => {
    // Get current configuration
    const currentConfig = getEmailJSConfig();
    setConfig(currentConfig);

    // Validate configurations
    const contactValid = validateContactEmailConfig();
    const chatValid = validateChatBotEmailConfig();
    
    setContactValidation(contactValid);
    setChatValidation(chatValid);
  }, []);

  const testEmailJSConnection = async () => {
    try {
      // This is a simple test - you can expand this based on your needs
      console.log('Testing EmailJS configuration...');
      console.log('Current config:', config);
      
      // Check if EmailJS is available
      if (typeof window !== 'undefined' && window.emailjs) {
        console.log('✅ EmailJS is available in browser');
      } else {
        console.log('❌ EmailJS is not available in browser');
      }
      
      // Check environment variables
      const envVars = {
        'REACT_APP_CHATBOT_SERVICE_ID': process.env.REACT_APP_CHATBOT_SERVICE_ID,
        'REACT_APP_CHATBOT_TEMPLATE_ID': process.env.REACT_APP_CHATBOT_TEMPLATE_ID,
        'REACT_APP_CONTACT_SERVICE_ID': process.env.REACT_APP_CONTACT_SERVICE_ID,
        'REACT_APP_CONTACT_TEMPLATE_ID': process.env.REACT_APP_CONTACT_TEMPLATE_ID,
        'REACT_APP_EMAILJS_PUBLIC_KEY': process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      };
      
      console.log('Environment Variables:', envVars);
      
    } catch (error) {
      console.error('Error testing EmailJS:', error);
    }
  };

  if (!config) {
    return <div>Loading configuration...</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>🔧 EmailJS Configuration Verifier</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={testEmailJSConnection}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Test Configuration
        </button>
        <p style={{ fontSize: '14px', color: '#666' }}>
          Click to test and check the browser console for detailed information
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Chat Bot Configuration */}
        <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
          <h3>🤖 Chat Bot Configuration</h3>
          <div style={{ marginBottom: '10px' }}>
            <strong>Service ID:</strong> {config.CHATBOT.serviceId}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <strong>Template ID:</strong> {config.CHATBOT.templateId}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <strong>Public Key:</strong> {config.publicKey ? `${config.publicKey.substring(0, 10)}...` : 'Not set'}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <strong>Status:</strong> 
            <span style={{ 
              color: chatValidation?.isValid ? 'green' : 'red',
              marginLeft: '5px'
            }}>
              {chatValidation?.isValid ? '✅ Valid' : '❌ Invalid'}
            </span>
          </div>
          {chatValidation && !chatValidation.isValid && (
            <div style={{ color: 'red', fontSize: '14px' }}>
              Missing: {chatValidation.missingConfig.join(', ')}
            </div>
          )}
        </div>

        {/* Contact Form Configuration */}
        <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
          <h3>📧 Contact Form Configuration</h3>
          <div style={{ marginBottom: '10px' }}>
            <strong>Service ID:</strong> {config.CONTACT.serviceId}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <strong>Template ID:</strong> {config.CONTACT.templateId}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <strong>Public Key:</strong> {config.publicKey ? `${config.publicKey.substring(0, 10)}...` : 'Not set'}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <strong>Status:</strong> 
            <span style={{ 
              color: contactValidation?.isValid ? 'green' : 'red',
              marginLeft: '5px'
            }}>
              {contactValidation?.isValid ? '✅ Valid' : '❌ Invalid'}
            </span>
          </div>
          {contactValidation && !contactValidation.isValid && (
            <div style={{ color: 'red', fontSize: '14px' }}>
              Missing: {contactValidation.missingConfig.join(', ')}
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
        <h3>📝 Setup Instructions</h3>
        <ol>
          <li>Copy <code>env-template.txt</code> to <code>.env</code> in your project root</li>
          <li>Replace <code>your_actual_public_key_here</code> with your real EmailJS public key</li>
          <li>Restart your development server</li>
          <li>Check the browser console for EmailJS initialization messages</li>
          <li>Test the contact form and chat bot functionality</li>
        </ol>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '5px', border: '1px solid #ffeaa7' }}>
        <h3>⚠️ Important Notes</h3>
        <ul>
          <li>Environment variables must start with <code>REACT_APP_</code> to be accessible in React</li>
          <li>After creating/updating the <code>.env</code> file, you must restart your development server</li>
          <li>The current configuration uses fallback values if environment variables are not set</li>
          <li>Check the browser console for detailed configuration information</li>
        </ul>
      </div>
    </div>
  );
};

export default EmailJSVerifier;
