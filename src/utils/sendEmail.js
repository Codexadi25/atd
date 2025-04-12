// utils/sendEmail.js
import emailjs from '@emailjs/browser';

const sendEmail = async (userMessage) => {
   const ticketId = `TKT-${Date.now().toString().slice(-6)}`;
   const templateParams = {
      user_query: `${userMessage}\n\nTicket ID: ${ticketId}`,
      to_email: "artisahu68802@gmail.com",  // ✅ Your email here
      page: window.location.href,
      // mqfx gqkz dzfc pkal
   };

  try {
      const result = await emailjs.send(
         // "service_as_atd", //"YOUR_SERVICE_ID"
         "service_6ai9cft", //"YOUR_SERVICE_ID"
         "template_2xb90p7", //"YOUR_TEMPLATE_ID"
         templateParams,
         "1a1enk0G-nfJjaAJ3" // "YOUR_PUBLIC_KEY"
      );
      
      return result;
   } catch (error) {
      console.error("EmailJS Error:", error);
      throw new Error(error.text || error.message || "Email sending failed");
   }
};

export default sendEmail;
