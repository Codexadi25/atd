# 🔧 EmailJS Troubleshooting Guide

## 🚨 Current Issue
- **Contact Form**: Not sending emails (showing success but no emails received)
- **Chat Bot**: Working correctly and sending emails
- **Both systems**: Should be completely separate entities

## 🔍 **Step-by-Step Troubleshooting**

### **Step 1: Test Both Systems Independently**

Add this component to any page temporarily:
```jsx
import EmailJSTester from './components/EmailJSTester';
<EmailJSTester />
```

This will test both systems side-by-side to identify the exact issue.

### **Step 2: Check Browser Console**

After restarting your server, you should see:
```
EmailJS initialized successfully with public key: 1a1enk0G-nfJjaAJ3
Chat Bot Service ID: service_6ai9cft
Chat Bot Template ID: template_2xb90p7
Contact Service ID: service_b9ecwpr
Contact Template ID: template_30xzw1h
```

### **Step 3: Test Contact Form**

1. Fill out the contact form
2. Submit it
3. Check the browser console for detailed logs
4. Look for these specific log messages:
   ```
   🔍 Contact Form: Sending admin ticket...
   🚀 Contact Form: Starting email send process...
   📧 Contact Form: Sending email with params: {...}
   📧 Contact Form: Using Contact Service ID: service_b9ecwpr
   📧 Contact Form: Using Contact Template ID: template_30xzw1h
   ```

### **Step 4: Test Chat Bot**

1. Use the chat bot
2. Ask a question that triggers ticket creation
3. Check the browser console for logs
4. Look for these specific log messages:
   ```
   🚀 Chat Bot: Starting email send process...
   📧 Chat Bot: Sending email with params: {...}
   📧 Chat Bot: Using Chat Bot Service ID: service_6ai9cft
   📧 Chat Bot: Using Chat Bot Template ID: template_2xb90p7
   ```

## 🚨 **Common Issues & Solutions**

### **Issue 1: Contact Form Shows Success But No Email**

**Symptoms**: Form shows "Ticket created successfully" but no email received

**Possible Causes**:
1. **EmailJS not initialized properly**
2. **Wrong service ID or template ID**
3. **Template variables mismatch**
4. **EmailJS dashboard configuration issue**

**Solutions**:
1. Check browser console for EmailJS initialization messages
2. Verify service ID `service_b9ecwpr` exists in your EmailJS dashboard
3. Verify template ID `template_30xzw1h` exists in your EmailJS dashboard
4. Check if the template has the correct variables

### **Issue 2: EmailJS Not Available Error**

**Symptoms**: Console shows "EmailJS is not available" or similar errors

**Solutions**:
1. Ensure `@emailjs/browser` is installed: `npm install @emailjs/browser`
2. Check if the package is in your `package.json`
3. Restart your development server
4. Clear browser cache and refresh

### **Issue 3: Service ID or Template ID Errors**

**Symptoms**: Console shows service/template not found errors

**Solutions**:
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Verify the service IDs exist:
   - `service_b9ecwpr` (Contact Form)
   - `service_6ai9cft` (Chat Bot)
3. Verify the template IDs exist:
   - `template_30xzw1h` (Contact Form)
   - `template_2xb90p7` (Chat Bot)
4. Ensure IDs match exactly (case-sensitive)

### **Issue 4: Public Key Issues**

**Symptoms**: Authentication errors or "unauthorized" messages

**Solutions**:
1. Get a fresh public key from your EmailJS dashboard
2. Ensure the key is not expired
3. Check for extra spaces or characters
4. Verify the key is properly set in your configuration

## 🧪 **Testing Commands**

### **Test EmailJS Installation**
```bash
npm list @emailjs/browser
```

### **Check Environment Variables**
Add this to any component temporarily:
```jsx
useEffect(() => {
  console.log('Environment Variables:', {
    CHATBOT_SERVICE_ID: process.env.REACT_APP_CHATBOT_SERVICE_ID,
    CONTACT_SERVICE_ID: process.env.REACT_APP_CONTACT_SERVICE_ID,
    PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  });
}, []);
```

### **Test EmailJS Configuration**
```jsx
import { getEmailJSConfig } from './config/emailjs.config.js';

useEffect(() => {
  const config = getEmailJSConfig();
  console.log('EmailJS Config:', config);
}, []);
```

## 📋 **Verification Checklist**

- [ ] **EmailJS Library**: `@emailjs/browser` installed and imported
- [ ] **Environment Variables**: `.env` file created with correct values
- [ ] **Server Restart**: Development server restarted after `.env` changes
- [ ] **Browser Console**: Shows EmailJS initialization messages
- [ ] **Service IDs**: Exist in EmailJS dashboard
- [ ] **Template IDs**: Exist in EmailJS dashboard
- [ ] **Public Key**: Valid and not expired
- [ ] **Template Variables**: Match what the code is sending
- [ ] **Network Tab**: No failed HTTP requests
- [ ] **EmailJS Dashboard**: Shows received emails

## 🔧 **Debugging Steps**

### **1. Use EmailJSTester Component**
This component will test both systems independently and show detailed results.

### **2. Check Console Logs**
Look for the specific log messages mentioned above to track the flow.

### **3. Check Network Tab**
In browser dev tools, look for failed HTTP requests to EmailJS.

### **4. Verify EmailJS Dashboard**
Check if emails are being received there, even if not in your inbox.

### **5. Test Template Variables**
Ensure your EmailJS templates have the correct variables that the code is sending.

## 🆘 **If Still Not Working**

1. **Compare Chat Bot vs Contact Form logs** to see where they differ
2. **Check EmailJS dashboard** for any error messages
3. **Verify template variables** match exactly
4. **Test with EmailJSTester component** to isolate the issue
5. **Check browser console** for any JavaScript errors

## 📚 **Additional Resources**

- **EmailJS Setup Guide**: `EMAILJS_SETUP.md`
- **Fixes Summary**: `EMAILJS_FIXES_SUMMARY.md`
- **Test Component**: `src/components/EmailJSTester.js`
- **EmailJS Official Docs**: [emailjs.com/docs](https://www.emailjs.com/docs/)

---

**The key is to test both systems independently and compare the results to identify the exact difference.**
