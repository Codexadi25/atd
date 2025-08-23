// EmailJS Setup Verification Script
// Run this script to verify your EmailJS configuration

console.log('🔧 EmailJS Setup Verification Script');
console.log('=====================================\n');

// Check if we're in a browser environment
if (typeof window === 'undefined') {
  console.log('❌ This script must run in a browser environment');
  console.log('   Please open your React app and check the browser console');
  process.exit(1);
}

// Check if EmailJS is available
if (typeof emailjs === 'undefined') {
  console.log('❌ EmailJS is not loaded. Please ensure @emailjs/browser is installed:');
  console.log('   npm install @emailjs/browser');
  console.log('');
} else {
  console.log('✅ EmailJS library is available');
}

// Configuration check
console.log('\n📋 Configuration Check:');
console.log('------------------------');

// Check environment variables
const envVars = {
  'REACT_APP_CHATBOT_SERVICE_ID': process.env.REACT_APP_CHATBOT_SERVICE_ID,
  'REACT_APP_CHATBOT_TEMPLATE_ID': process.env.REACT_APP_CHATBOT_TEMPLATE_ID,
  'REACT_APP_CONTACT_SERVICE_ID': process.env.REACT_APP_CONTACT_SERVICE_ID,
  'REACT_APP_CONTACT_TEMPLATE_ID': process.env.REACT_APP_CONTACT_TEMPLATE_ID,
  'REACT_APP_EMAILJS_PUBLIC_KEY': process.env.REACT_APP_EMAILJS_PUBLIC_KEY
};

console.log('Environment Variables:');
Object.entries(envVars).forEach(([key, value]) => {
  if (value) {
    console.log(`   ✅ ${key}: ${value}`);
  } else {
    console.log(`   ❌ ${key}: Not set (will use fallback values)`);
  }
});

// Expected configuration
console.log('\nExpected Configuration:');
console.log('   Chat Bot Service ID: service_6ai9cft');
console.log('   Chat Bot Template ID: template_2xb90p7');
console.log('   Contact Service ID: service_b9ecwpr');
console.log('   Contact Template ID: template_30xzw1h');

console.log('\n📝 Setup Instructions:');
console.log('======================');
console.log('');
console.log('1. Create a .env file in your project root with:');
console.log('');
console.log('   # EmailJS Configuration for Chat Bot Ticket Raising');
console.log('   REACT_APP_CHATBOT_SERVICE_ID=service_6ai9cft');
console.log('   REACT_APP_CHATBOT_TEMPLATE_ID=template_2xb90p7');
console.log('');
console.log('   # EmailJS Configuration for Contact Us Form');
console.log('   REACT_APP_CONTACT_SERVICE_ID=service_b9ecwpr');
console.log('   REACT_APP_CONTACT_TEMPLATE_ID=template_30xzw1h');
console.log('');
console.log('   # EmailJS Public Key (replace with your actual key)');
console.log('   REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key_here');
console.log('');
console.log('2. Restart your development server after creating the .env file');
console.log('');
console.log('3. Check the browser console for EmailJS initialization messages');
console.log('');
console.log('4. Test the contact form and chat bot functionality');
console.log('');
console.log('5. Verify emails are being sent to your EmailJS dashboard');

console.log('\n🔍 Troubleshooting:');
console.log('===================');
console.log('');
console.log('• If emails are not sending, check your EmailJS dashboard');
console.log('• Verify service IDs and template IDs are correct');
console.log('• Ensure your public key is valid and not expired');
console.log('• Check browser console for error messages');
console.log('• Verify EmailJS templates have the correct variables');

console.log('\n📚 Documentation:');
console.log('=================');
console.log('• EmailJS Setup Guide: EMAILJS_SETUP.md');
console.log('• Changes Summary: CHANGES_SUMMARY.md');
console.log('• EmailJS Official Docs: https://www.emailjs.com/docs/');

console.log('\n✨ Setup complete! Check the configuration above and follow the instructions.');
