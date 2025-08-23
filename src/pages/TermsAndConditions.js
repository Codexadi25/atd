import React from 'react';
import { Container, Typography, Box } from '@mui/material';

// --- Inline Styles ---
const styles = {
  container: {
    padding: '40px 24px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    marginTop: '40px',
    marginBottom: '40px',
  },
  mainTitle: {
    textAlign: 'center',
    marginBottom: '8px',
    fontWeight: 'bold',
  },
  lastUpdated: {
    textAlign: 'center',
    color: '#6c757d',
    marginBottom: '32px',
  },
  sectionTitle: {
    marginTop: '24px',
    marginBottom: '16px',
    fontWeight: 600,
    borderBottom: '2px solid #f0f0f0',
    paddingBottom: '8px',
  },
  paragraph: {
    lineHeight: 1.7,
    textAlign: 'justify',
    color: '#343a40',
    marginBottom: '16px',
  },
  contactBox: {
    marginTop: '32px',
    padding: '24px',
    border: '1px solid #dee2e6',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
  },
  contactTitle: {
      marginBottom: '16px',
      fontWeight: 600,
  }
};

// --- React Component ---
const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" style={styles.container}>
      <Typography variant="h4" component="h1" style={styles.mainTitle}>
        Terms and Conditions
      </Typography>
      <Typography variant="body2" style={styles.lastUpdated}>
        Last updated: August 23, 2025
      </Typography>

      <Typography variant="body1" style={styles.paragraph}>
        Please read these terms and conditions carefully before using Our Service.
      </Typography>

      {/* Section 1 */}
      <Typography variant="h5" component="h2" style={styles.sectionTitle}>
        1. Agreement to Terms
      </Typography>
      <Typography variant="body1" style={styles.paragraph}>
        These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and <strong>Aditya Tech. & Devoops.</strong> (“we,” “us” or “our”), concerning your access to and use of the Aditya Tech. & Devoops. website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Site and you must discontinue use immediately.
      </Typography>

      {/* Section 2 */}
      <Typography variant="h5" component="h2" style={styles.sectionTitle}>
        2. Intellectual Property Rights
      </Typography>
      <Typography variant="body1" style={styles.paragraph}>
        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions.
      </Typography>

      {/* Section 3 */}
      <Typography variant="h5" component="h2" style={styles.sectionTitle}>
        3. User Representations
      </Typography>
      <Typography variant="body1" style={styles.paragraph}>
        By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms and Conditions; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; (5) your use of the Site will not violate any applicable law or regulation.
      </Typography>

      {/* Section 4 */}
      <Typography variant="h5" component="h2" style={styles.sectionTitle}>
        4. Prohibited Activities
      </Typography>
      <Typography variant="body1" style={styles.paragraph}>
        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Site, you agree not to systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
      </Typography>
      
      {/* Add other sections similarly... */}

      {/* Section 10 */}
      <Typography variant="h5" component="h2" style={styles.sectionTitle}>
        10. Disclaimer
      </Typography>
      <Typography variant="body1" style={styles.paragraph}>
        THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
      </Typography>

       {/* Section 11 */}
       <Typography variant="h5" component="h2" style={styles.sectionTitle}>
        11. Limitations of Liability
      </Typography>
      <Typography variant="body1" style={styles.paragraph}>
        IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </Typography>

      {/* Section 15 */}
      <Box style={styles.contactBox}>
        <Typography variant="h5" component="h2" style={styles.contactTitle}>
          15. Contact Us
        </Typography>
        <Typography variant="body1" style={{...styles.paragraph, marginBottom: '8px'}}>
          In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
        </Typography>
        <Typography variant="body1" style={{...styles.paragraph, marginBottom: '4px'}}>
          <strong>Aditya Tech. & Devoops.</strong>
        </Typography>
        <Typography variant="body1" style={{...styles.paragraph, marginBottom: '4px'}}>
          Kanpur Nagar
        </Typography>
         <Typography variant="body1" style={{...styles.paragraph, marginBottom: '4px'}}>
          Uttar Pradesh, Zip Code - 208021
        </Typography>
        <Typography variant="body1" style={{...styles.paragraph, marginBottom: '4px'}}>
          India
        </Typography>
        <Typography variant="body1" style={{...styles.paragraph, marginBottom: '4px'}}>
          <strong>Phone:</strong> +91 7985 6939 55
        </Typography>
        <Typography variant="body1" style={{...styles.paragraph, marginBottom: 0}}>
          <strong>Email:</strong> professionaladitya25@gmail.com & support.atd@gmail.com
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;