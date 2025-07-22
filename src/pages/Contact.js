import React, { useRef } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6ai9cft',          // Service ID
      'template_2xb90p7',         // Template ID
      form.current,               // Form ref
      '1a1enk0G-nfJjaAJ3'         // Public Key from EmailJS
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
    <div className='contactUsPage'>
      <h2>Contact Us</h2>
      <form className='form' ref={form} onSubmit={sendEmail}>
        <TextField id="outlined-basic" type="text" name="name" label="Name" variant="outlined" required />
        {/* <input type="email" name="email" required /> */}
        <TextField id="outlined-basic" type="email" name="email" label="Email" variant="outlined" required />
        <TextField id="outlined-basic" type="text" name="subject" label="Subject Line" variant="outlined"/>
        <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            required
          />
          <TextField id="outlined-basic" type="phone" name="phone" label="Contact no." variant="outlined" required />

        <Button type='submit' variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default Contact

