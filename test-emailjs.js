// EmailJS Configuration Test Script
// Run this in your browser console to test the configuration

console.log('🧪 Testing EmailJS Configuration...\n');

// Test 1: Check if EmailJS is available
if (typeof emailjs !== 'undefined') {
  console.log('✅ EmailJS is available');
} else {
  console.log('❌ EmailJS is not available');
  console.log('   Please install: npm install @emailjs/browser');
}

// Test 2: Check environment variables
console.log('\n📋 Environment Variables:');
const envVars = {
  'REACT_APP_CHATBOT_SERVICE_ID': process.env.REACT_APP_CHATBOT_SERVICE_ID,
  'REACT_APP_CHATBOT_TEMPLATE_ID': process.env.REACT_APP_CHATBOT_TEMPLATE_ID,
  'REACT_APP_CONTACT_SERVICE_ID': process.env.REACT_APP_CONTACT_SERVICE_ID,
  'REACT_APP_CONTACT_TEMPLATE_ID': process.env.REACT_APP_CONTACT_TEMPLATE_ID,
  'REACT_APP_EMAILJS_PUBLIC_KEY': process.env.REACT_APP_EMAILJS_PUBLIC_KEY
};

Object.entries(envVars).forEach(([key, value]) => {
  if (value) {
    console.log(`   ✅ ${key}: ${value}`);
  } else {
    console.log(`   ❌ ${key}: Not set`);
  }
});

// Test 3: Check configuration object
console.log('\n⚙️ Configuration Object:');
try {
  // This will only work if the config is properly imported
  if (typeof getEmailJSConfig === 'function') {
    const config = getEmailJSConfig();
    console.log('   ✅ Configuration loaded successfully');
    console.log('   Chat Bot Service ID:', config.CHATBOT.serviceId);
    console.log('   Chat Bot Template ID:', config.CHATBOT.templateId);
    console.log('   Contact Service ID:', config.CONTACT.serviceId);
    console.log('   Contact Template ID:', config.CONTACT.templateId);
    console.log('   Public Key:', config.publicKey ? `${config.publicKey.substring(0, 10)}...` : 'Not set');
  } else {
    console.log('   ❌ getEmailJSConfig function not available');
  }
} catch (error) {
  console.log('   ❌ Error loading configuration:', error.message);
}

// Test 4: Check if utilities are available
console.log('\n🔧 Utility Functions:');
const utilities = {
  'initContactEmailJS': typeof initContactEmailJS,
  'sendContactFormEmail': typeof sendContactFormEmail,
  'initChatBotEmailJS': typeof initChatBotEmailJS,
  'sendChatTicketEmail': typeof sendChatTicketEmail
};

Object.entries(utilities).forEach(([name, type]) => {
  if (type === 'function') {
    console.log(`   ✅ ${name}: Available`);
  } else {
    console.log(`   ❌ ${name}: Not available (${type})`);
  }
});

// Test 5: Summary and recommendations
console.log('\n📊 Test Summary:');
const totalTests = Object.keys(envVars).length + 4; // env vars + 4 other tests
let passedTests = 0;

// Count passed tests
Object.values(envVars).forEach(value => { if (value) passedTests++; });
if (typeof emailjs !== 'undefined') passedTests++;
if (typeof getEmailJSConfig === 'function') passedTests++;
Object.values(utilities).forEach(type => { if (type === 'function') passedTests++; });

console.log(`   Tests Passed: ${passedTests}/${totalTests}`);

if (passedTests === totalTests) {
  console.log('   🎉 All tests passed! Your EmailJS setup looks good.');
} else {
  console.log('   ⚠️ Some tests failed. Please check the issues above.');
}

console.log('\n📝 Next Steps:');
console.log('1. If environment variables are missing, create a .env file');
console.log('2. If EmailJS is not available, run: npm install @emailjs/browser');
console.log('3. Restart your development server after making changes');
console.log('4. Check the browser console for EmailJS initialization messages');

console.log('\n🔍 For detailed setup instructions, see: ENV_SETUP_GUIDE.md');
