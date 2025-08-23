# 🌍 Environment Setup Guide for EmailJS

## Overview
This guide will help you properly set up the environment variables for EmailJS in your React application.

## 🚀 Quick Setup Steps

### 1. Create the .env file
Create a file named `.env` (exactly this name, with the dot) in your project root directory (same level as `package.json`).

### 2. Add the configuration
Copy and paste the following content into your `.env` file:

```env
# EmailJS Configuration for Chat Bot Ticket Raising
REACT_APP_CHATBOT_SERVICE_ID=service_6ai9cft
REACT_APP_CHATBOT_TEMPLATE_ID=template_2xb90p7

# EmailJS Configuration for Contact Us Form
REACT_APP_CONTACT_SERVICE_ID=service_b9ecwpr
REACT_APP_CONTACT_TEMPLATE_ID=template_30xzw1h

# EmailJS Public Key (REPLACE WITH YOUR ACTUAL PUBLIC KEY)
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

### 3. Replace the public key
Replace `your_actual_public_key_here` with your actual EmailJS public key.

### 4. Restart your development server
After creating/updating the `.env` file, you must restart your development server for the changes to take effect.

## 📁 File Structure
Your project should look like this:
```
atd/
├── .env                    ← Create this file here
├── package.json
├── src/
│   ├── config/
│   │   └── emailjs.config.js
│   ├── utils/
│   │   ├── chatTicketUtility.js
│   │   └── contactUsUtility.js
│   └── ...
└── ...
```

## 🔑 Getting Your EmailJS Public Key

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign in to your account
3. Click on "Account" in the left sidebar
4. Copy your "Public Key"

## ✅ Verification Steps

### Step 1: Check Browser Console
After restarting your server, open your React app and check the browser console. You should see:
```
Contact EmailJS initialized successfully
ChatBot EmailJS initialized successfully
```

### Step 2: Use the Debug Component
Add the `EmailJSDebugger` component to your app temporarily to test and debug the configuration:

```jsx
import EmailJSDebugger from './components/EmailJSDebugger';

// Add this to any page temporarily
<EmailJSDebugger />
```

### Step 3: Test the Forms
- Try submitting the contact form
- Try using the chat bot
- Check if emails are being sent to your EmailJS dashboard

## 🚨 Common Issues & Solutions

### Issue: Environment variables not loading
**Solution**: 
- Ensure the file is named exactly `.env` (not `.env.txt` or `.env.local`)
- Restart your development server after creating the file
- Check that variables start with `REACT_APP_`

### Issue: "EmailJS is not available" error
**Solution**:
- Install EmailJS: `npm install @emailjs/browser`
- Check if the package is in your `package.json`

### Issue: Service ID or Template ID errors
**Solution**:
- Verify the IDs in your EmailJS dashboard
- Ensure the IDs match exactly (case-sensitive)

### Issue: Public key errors
**Solution**:
- Get a fresh public key from your EmailJS dashboard
- Ensure the key is not expired
- Check for any extra spaces or characters

## 🔧 Troubleshooting Commands

### Check if .env file exists
```bash
# On Windows
dir /a .env

# On Mac/Linux
ls -la .env
```

### Check environment variables in React
Add this to your component temporarily:
```jsx
useEffect(() => {
  console.log('Environment Variables:', {
    CHATBOT_SERVICE_ID: process.env.REACT_APP_CHATBOT_SERVICE_ID,
    CONTACT_SERVICE_ID: process.env.REACT_APP_CONTACT_SERVICE_ID,
    PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  });
}, []);
```

### Verify EmailJS installation
```bash
npm list @emailjs/browser
```

## 📋 Configuration Checklist

- [ ] `.env` file created in project root
- [ ] All required environment variables added
- [ ] Public key replaced with actual value
- [ ] Development server restarted
- [ ] Browser console shows initialization messages
- [ ] Contact form sends emails successfully
- [ ] Chat bot creates tickets successfully

## 🆘 Need Help?

If you're still having issues:

1. **Check the browser console** for error messages
2. **Verify EmailJS dashboard** for service status
3. **Use the EmailJSVerifier component** to diagnose issues
4. **Check the setup script** (`setup-emailjs.js`) for detailed information
5. **Review the EmailJS documentation** at [emailjs.com/docs](https://www.emailjs.com/docs/)

## 📚 Additional Resources

- **EmailJS Setup Guide**: `EMAILJS_SETUP.md`
- **Changes Summary**: `CHANGES_SUMMARY.md`
- **Setup Script**: `setup-emailjs.js`
- **Verification Component**: `src/components/EmailJSVerifier.js`
- **Configuration File**: `src/config/emailjs.config.js`

---

**Remember**: The `.env` file contains sensitive information and should never be committed to version control. Make sure it's in your `.gitignore` file.
