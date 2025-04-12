import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6ai9cft',         // Your Service ID
      'template_2xb90p7',         // Your Template ID
      form.current,              // Form ref
      '1a1enk0G-nfJjaAJ3'          // Your Public Key from EmailJS
    )
    .then((result) => {
      console.log('✅ Message sent:', result.text);
      alert('Ticket sent successfully!');
    })
    .catch((error) => {
      console.log('❌ Error:', error.text);
      alert('Failed to send ticket.');
    });
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" required />

      <label>Email</label>
      <input type="email" name="email" required />

      <label>Subject</label>
      <input type="text" name="subject" required />

      <label>Message</label>
      <textarea name="message" required />

      <button type="submit">Raise Ticket</button>
    </form>
  );
}

export default Contact

