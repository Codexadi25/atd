import React from 'react';
import { Container, Typography, Fade } from '@mui/material';
import './ProductsHero.css';

const ProductsHero = () => {
  return (
    <div className="products__hero-section">
      <Container maxWidth="lg">
        <Fade in={true} timeout={1000}>
          <div className="products__hero-content">
            <Typography variant="h1" className="products__hero-title">
              Our Products
            </Typography>
            <Typography variant="h5" className="products__hero-subtitle">
              Discover our collection of premium website templates, dashboard UIs, and analytics boards 
              designed to accelerate your digital projects.
            </Typography>
          </div>
        </Fade>
      </Container>
    </div>
  );
};

export default ProductsHero;