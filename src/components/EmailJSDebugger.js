import React, { useState } from 'react';
import { getEmailJSConfig } from '../config/emailjs.config.js';
import { sendContactFormEmail } from '../utils/contactUsUtility';
import { sendChatTicketEmail } from '../utils/chatTicketUtility';

const EmailJSDebugger = () => {
  const [testResults, setTestResults] = useState(null);
  const [isTesting, setIsTesting] = useState(false);

  const testContactForm = async () => {
    setIsTesting(true);
    try {
      const config = getEmailJSConfig();
      console.log('🔍 Testing Contact Form EmailJS Configuration...');
      
      const testData = {
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Company',
        phone: '+1234567890',
        subject: 'Test Contact Form Submission',
        priority: 'medium',
        category: 'general',
        message: 'This is a test message to verify EmailJS configuration.'
      };

      console.log('📧 Sending test contact form email...');
      const result = await sendContactFormEmail(testData);
      
      setTestResults({
        type: 'Contact Form',
        success: result.success,
        message: result.message,
        ticketId: result.ticketId,
        error: result.error
      });

      console.log('📊 Contact Form Test Result:', result);
      
    } catch (error) {
      console.error('❌ Contact Form Test Failed:', error);
      setTestResults({
        type: 'Contact Form',
        success: false,
        message: 'Test failed with exception',
        error: error.message
      });
    } finally {
      setIsTesting(false);
    }
  };

  const testChatBot = async () => {
    setIsTesting(true);
    try {
      const config = getEmailJSConfig();
      console.log('🔍 Testing Chat Bot EmailJS Configuration...');
      
      const testData = {
        userQuery: 'Test chat bot query',
        userName: 'Test Chat User',
        userEmail: 'chat@example.com',
        category: 'General Inquiry',
        priority: 'Medium'
      };

      console.log('📧 Sending test chat bot email...');
      const result = await sendChatTicketEmail(testData);
      
      setTestResults({
        type: 'Chat Bot',
        success: result.success,
        message: result.message,
        ticketId: result.ticketId,
        error: result.error
      });

      console.log('📊 Chat Bot Test Result:', result);
      
    } catch (error) {
      console.error('❌ Chat Bot Test Failed:', error);
      setTestResults({
        type: 'Chat Bot',
        success: false,
        message: 'Test failed with exception',
        error: error.message
      });
    } finally {
      setIsTesting(false);
    }
  };

  const config = getEmailJSConfig();

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2>🔧 EmailJS Debugger & Tester</h2>
      
      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
        <h3>📋 Current Configuration</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <h4>🤖 Chat Bot</h4>
            <p><strong>Service ID:</strong> {config.CHATBOT.serviceId}</p>
            <p><strong>Template ID:</strong> {config.CHATBOT.templateId}</p>
          </div>
          <div>
            <h4>📧 Contact Form</h4>
            <p><strong>Service ID:</strong> {config.CONTACT.serviceId}</p>
            <p><strong>Template ID:</strong> {config.CONTACT.templateId}</p>
          </div>
        </div>
        <p><strong>Public Key:</strong> {config.publicKey ? `${config.publicKey.substring(0, 10)}...` : 'Not set'}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>🧪 Test EmailJS Functionality</h3>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <button 
            onClick={testContactForm}
            disabled={isTesting}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: isTesting ? 'not-allowed' : 'pointer'
            }}
          >
            {isTesting ? 'Testing...' : 'Test Contact Form'}
          </button>
          
          <button 
            onClick={testChatBot}
            disabled={isTesting}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: isTesting ? 'not-allowed' : 'pointer'
            }}
          >
            {isTesting ? 'Testing...' : 'Test Chat Bot'}
          </button>
        </div>
        
        <p style={{ fontSize: '14px', color: '#666' }}>
          Click the buttons above to test EmailJS functionality. Check the browser console for detailed logs.
        </p>
      </div>

      {testResults && (
        <div style={{ 
          padding: '15px', 
          borderRadius: '5px',
          backgroundColor: testResults.success ? '#d4edda' : '#f8d7da',
          border: `1px solid ${testResults.success ? '#c3e6cb' : '#f5c6cb'}`
        }}>
          <h3>📊 Test Results: {testResults.type}</h3>
          <p><strong>Status:</strong> {testResults.success ? '✅ Success' : '❌ Failed'}</p>
          <p><strong>Message:</strong> {testResults.message}</p>
          {testResults.ticketId && (
            <p><strong>Ticket ID:</strong> {testResults.ticketId}</p>
          )}
          {testResults.error && (
            <div>
              <p><strong>Error:</strong></p>
              <pre style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '3px', overflow: 'auto' }}>
                {JSON.stringify(testResults.error, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '5px', border: '1px solid #ffeaa7' }}>
        <h3>🔍 Troubleshooting Steps</h3>
        <ol>
          <li><strong>Check Browser Console:</strong> Look for EmailJS initialization and error messages</li>
          <li><strong>Verify Service IDs:</strong> Ensure they match your EmailJS dashboard exactly</li>
          <li><strong>Check Template IDs:</strong> Verify they exist in your EmailJS account</li>
          <li><strong>Public Key:</strong> Ensure it's valid and not expired</li>
          <li><strong>EmailJS Dashboard:</strong> Check if emails are being received there</li>
          <li><strong>Network Tab:</strong> Look for failed HTTP requests in browser dev tools</li>
        </ol>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e2e3e5', borderRadius: '5px' }}>
        <h3>📝 Expected Behavior</h3>
        <ul>
          <li><strong>Contact Form:</strong> Should use <code>service_b9ecwpr</code> and <code>template_30xzw1h</code></li>
          <li><strong>Chat Bot:</strong> Should use <code>service_6ai9cft</code> and <code>template_2xb90p7</code></li>
          <li><strong>Both:</strong> Should send emails to your EmailJS dashboard</li>
          <li><strong>Console:</strong> Should show detailed logging for debugging</li>
        </ul>
      </div>
    </div>
  );
};

export default EmailJSDebugger;
