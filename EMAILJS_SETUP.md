# EmailJS Setup Guide

This project uses EmailJS for sending emails from the contact form and chat bot ticket system. Follow these steps to configure EmailJS properly.

## Required EmailJS Credentials

### Chat Bot Ticket Raising
- **Service ID**: `service_6ai9cft`
- **Template ID**: `template_2xb90p7`

### Contact Us Form
- **Service ID**: `service_b9ecwpr`
- **Template ID**: `template_30xzw1h`

### Public Key
- **Public Key**: You'll need to add your actual EmailJS public key

## Setup Instructions

### 1. Create a .env file
Create a `.env` file in the root directory of your project with the following content:

```env
# EmailJS Configuration for Chat Bot Ticket Raising
REACT_APP_CHATBOT_SERVICE_ID=service_6ai9cft
REACT_APP_CHATBOT_TEMPLATE_ID=template_2xb90p7

# EmailJS Configuration for Contact Us Form
REACT_APP_CONTACT_SERVICE_ID=service_b9ecwpr
REACT_APP_CONTACT_TEMPLATE_ID=template_30xzw1h

# EmailJS Public Key (replace with your actual public key)
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

### 2. Alternative Configuration
If you prefer not to use environment variables, you can directly modify the configuration in:
```
src/config/emailjs.config.js
```

### 3. EmailJS Account Setup
1. Go to [EmailJS](https://www.emailjs.com/) and create an account
2. Create a new service (Gmail, Outlook, etc.)
3. Create email templates for both chat bot and contact form
4. Get your public key from the EmailJS dashboard

### 4. Template Variables
Make sure your EmailJS templates include these variables:

#### Chat Bot Template Variables:
- `{{user_query}}` - Formatted ticket message
- `{{ticket_id}}` - Unique ticket identifier
- `{{customer_name}}` - Customer name
- `{{customer_email}}` - Customer email
- `{{chat_session}}` - Chat session details
- `{{priority}}` - Ticket priority
- `{{category}}` - Issue category

#### Contact Form Template Variables:
- `{{user_query}}` - Formatted contact form message
- `{{ticket_id}}` - Unique ticket identifier
- `{{customer_name}}` - Customer name
- `{{customer_email}}` - Customer email
- `{{company}}` - Company name
- `{{phone}}` - Phone number
- `{{subject}}` - Inquiry subject
- `{{priority}}` - Priority level
- `{{category}}` - Inquiry category
- `{{message}}` - Customer message

## File Structure

The EmailJS utilities have been split into separate files:

- `src/utils/chatTicketUtility.js` - For chat bot ticket raising
- `src/utils/contactUsUtility.js` - For contact form submissions
- `src/config/emailjs.config.js` - Configuration file

## Usage

### In Contact Form:
```javascript
import { initContactEmailJS, sendContactFormEmail } from '../utils/contactUsUtility';

// Initialize
useEffect(() => {
  initContactEmailJS();
}, []);

// Send email
const result = await sendContactFormEmail(formData);
```

### In Chat Bot:
```javascript
import { initChatBotEmailJS, sendChatTicketEmail } from '../utils/chatTicketUtility';

// Initialize
useEffect(() => {
  initChatBotEmailJS();
}, []);

// Send ticket
const result = await sendChatTicketEmail(chatData);
```

## Troubleshooting

1. **Check console logs** for EmailJS initialization and sending status
2. **Verify service IDs and template IDs** are correct
3. **Ensure public key** is valid and not expired
4. **Check EmailJS dashboard** for any service issues
5. **Verify template variables** match what's expected in your templates

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify EmailJS service status
3. Test with EmailJS's built-in testing tools
4. Check EmailJS documentation and support
