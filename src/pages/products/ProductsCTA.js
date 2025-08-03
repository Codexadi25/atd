import React from 'react';
import { Container, Typography, Button, } from '@mui/material';
import { GetApp as RequestIcon, Code as CodeIcon } from '@mui/icons-material';
import './ProductsCTA.css';

const ProductsCTA = () => {
  const handleCustomDesignRequest = () => {
    // Handle custom design request
    alert('Custom design request form - Feature coming soon!');
  };

  const handleViewAllTemplates = () => {
    // Handle view all templates
    alert('View all templates - Feature coming soon!');
  };

  return (
    <div className="products__cta-section">
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom className="products__cta-title">
          Ready to Get Started?
        </Typography>
        <Typography variant="h6" align="center" className="products__cta-subtitle">
          Choose from our premium collection or request a custom solution tailored to your needs.
        </Typography>
        <div className="products__cta-buttons">
          <Button
            variant="contained"
            size="large"
            startIcon={<RequestIcon />}
            className="products__cta-button-primary"
            onClick={handleCustomDesignRequest}
          >
            Request Custom Design
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<CodeIcon />}
            className="products__cta-button-secondary"
            onClick={handleViewAllTemplates}
          >
            View All Templates
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ProductsCTA;