import React, { useEffect } from 'react'
import './App.css';
import AppRoutes from './routes/AppRoutes.js';
import "./styles/global.css";  // Import global styles
import { getEmailJSConfig } from './config/emailjs.config.js';


function App() {
  useEffect(() => {
    // Initialize EmailJS once with the public key
    const config = getEmailJSConfig();
    
    // Initialize EmailJS with the public key
    import('@emailjs/browser').then((emailjs) => {
      emailjs.default.init(config.publicKey);
      
      console.log('EmailJS initialized successfully with public key:', config.publicKey);
      console.log('Chat Bot Service ID:', config.CHATBOT.serviceId);
      console.log('Chat Bot Template ID:', config.CHATBOT.templateId);
      console.log('Contact Service ID:', config.CONTACT.serviceId);
      console.log('Contact Template ID:', config.CONTACT.templateId);
      console.log('Confirmation Service ID:', config.CONFIRMATION.serviceId);
      console.log('Confirmation Template ID:', config.CONFIRMATION.templateId);
    });
  }, []);
  return (
    <div className="App">
      <AppRoutes/>
    </div>
  );
}

export default App;
