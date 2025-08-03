import React from 'react';
import { Grid, Fade } from '@mui/material';
import ProductCard from './ProductCard';
import './ProductsGrid.css';

const ProductsGrid = ({ products, selectedTab, onViewProduct, onRequestProduct }) => {
  return (
    <div className="products__grid-container">
      <Fade in={true} timeout={800} key={selectedTab}>
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
              onViewProduct={onViewProduct}
              onRequestProduct={onRequestProduct}
            />
          ))}
        </Grid>
      </Fade>
    </div>
  );
};

export default ProductsGrid;