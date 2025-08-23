import React from 'react';
import { Fade } from '@mui/material';
import ProductCard from './ProductCard';
import './ProductsGrid.css';

const ProductsGrid = ({ products, selectedTab, onViewProduct, onRequestProduct }) => {
  return (
    <div className="products__grid-container">
      <Fade in={true} timeout={800} key={selectedTab}>
        <div className="products__grid">
          {products.map((product, index) => (
            <div key={product.id} className="products__grid-item">
              <ProductCard 
                product={product} 
                index={index}
                onViewProduct={onViewProduct}
                onRequestProduct={onRequestProduct}
              />
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default ProductsGrid;