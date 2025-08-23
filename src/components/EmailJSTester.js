import React, { useState } from 'react';
import { sendContactFormEmail } from '../utils/contactUsUtility';
import { sendChatTicketEmail } from '../utils/chatTicketUtility';

const EmailJSTester = () => {
  const [contactResult, setContactResult] = useState(null);
  const [chatResult, setChatResult] = useState(null);
  const [isTesting, setIsTesting] = useState(false);

  const testContactForm = async () => {
    setIsTesting(true);
    setContactResult(null);
    
    try {
      console.log('🧪 Testing Contact Form...');
      
      const testData = {
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Company',
        phone: '+1234567890',
        subject: 'Test Contact Form',
        priority: 'medium',
        category: 'general',
        message: 'This is a test message from the Contact Form.'
      };

      const result = await sendContactFormEmail(testData);
      setContactResult(result);
      
      console.log('📊 Contact Form Test Result:', result);
      
    } catch (error) {
      console.error('❌ Contact Form Test Failed:', error);
      setContactResult({
        success: false,
        message: 'Test failed with exception: ' + error.message,
        error: error
      });
    } finally {
      setIsTesting(false);
    }
  };

  const testChatBot = async () => {
    setIsTesting(true);
    setChatResult(null);
    
    try {
      console.log('🧪 Testing Chat Bot...');
      
      const testData = {
        userQuery: 'Test chat bot query',
        userName: 'Test Chat User',
        userEmail: 'chat@example.com',
        category: 'General Inquiry',
        priority: 'Medium'
      };

      const result = await sendChatTicketEmail(testData);
      setChatResult(result);
      
      console.log('📊 Chat Bot Test Result:', result);
      
    } catch (error) {
      console.error('❌ Chat Bot Test Failed:', error);
      setChatResult({
        success: false,
        message: 'Test failed with exception: ' + error.message,
        error: error
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>🧪 EmailJS System Tester</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <p>Use this component to test both EmailJS systems independently.</p>
        <p>Check the browser console for detailed logs.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        {/* Contact Form Test */}
        <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
          <h3>📧 Contact Form Test</h3>
          <button 
            onClick={testContactForm}
            disabled={isTesting}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: isTesting ? 'not-allowed' : 'pointer',
              width: '100%'
            }}
          >
            {isTesting ? 'Testing...' : 'Test Contact Form'}
          </button>
          
          {contactResult && (
            <div style={{ 
              marginTop: '10px', 
              padding: '10px', 
              borderRadius: '3px',
              backgroundColor: contactResult.success ? '#d4edda' : '#f8d7da',
              border: `1px solid ${contactResult.success ? '#c3e6cb' : '#f5c6cb'}`
            }}>
              <p><strong>Status:</strong> {contactResult.success ? '✅ Success' : '❌ Failed'}</p>
              <p><strong>Message:</strong> {contactResult.message}</p>
              {contactResult.ticketId && <p><strong>Ticket ID:</strong> {contactResult.ticketId}</p>}
              {contactResult.error && (
                <details>
                  <summary>Error Details</summary>
                  <pre style={{ fontSize: '12px', overflow: 'auto' }}>
                    {JSON.stringify(contactResult.error, null, 2)}
                  </pre>
                </details>
              )}
            </div>
          )}
        </div>

        {/* Chat Bot Test */}
        <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
          <h3>🤖 Chat Bot Test</h3>
          <button 
            onClick={testChatBot}
            disabled={isTesting}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: isTesting ? 'not-allowed' : 'pointer',
              width: '100%'
            }}
          >
            {isTesting ? 'Testing...' : 'Test Chat Bot'}
          </button>
          
          {chatResult && (
            <div style={{ 
              marginTop: '10px', 
              padding: '10px', 
              borderRadius: '3px',
              backgroundColor: chatResult.success ? '#d4edda' : '#f8d7da',
              border: `1px solid ${chatResult.success ? '#c3e6cb' : '#f5c6cb'}`
            }}>
              <p><strong>Status:</strong> {chatResult.success ? '✅ Success' : '❌ Failed'}</p>
              <p><strong>Message:</strong> {chatResult.message}</p>
              {chatResult.ticketId && <p><strong>Ticket ID:</strong> {chatResult.ticketId}</p>}
              {chatResult.error && (
                <details>
                  <summary>Error Details</summary>
                  <pre style={{ fontSize: '12px', overflow: 'auto' }}>
                    {JSON.stringify(chatResult.error, null, 2)}
                  </pre>
                </details>
              )}
            </div>
          )}
        </div>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
        <h3>📋 Test Instructions</h3>
        <ol>
          <li>Click "Test Contact Form" to test the contact form EmailJS system</li>
          <li>Click "Test Chat Bot" to test the chat bot EmailJS system</li>
          <li>Check the browser console for detailed logs</li>
          <li>Check your EmailJS dashboard for received emails</li>
          <li>Compare the results to identify any issues</li>
        </ol>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '5px', border: '1px solid #ffeaa7' }}>
        <h3>⚠️ Expected Results</h3>
        <ul>
          <li><strong>Contact Form:</strong> Should send email using <code>service_b9ecwpr</code> and <code>template_30xzw1h</code></li>
          <li><strong>Chat Bot:</strong> Should send email using <code>service_6ai9cft</code> and <code>template_2xb90p7</code></li>
          <li><strong>Both:</strong> Should return success and create tickets</li>
          <li><strong>Console:</strong> Should show detailed logging for debugging</li>
        </ul>
      </div>
    </div>
  );
};

export default EmailJSTester;
