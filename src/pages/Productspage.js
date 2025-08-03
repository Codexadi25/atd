import React, { useState } from 'react';
import { Container } from '@mui/material';
import ProductsHero from './products/ProductsHero.js';
import ProductsTabs from './products/ProductsTabs.js';
import ProductsGrid from './products/ProductsGrid.js';
import ProductsCTA from './products/ProductsCTA.js';
import ProductDialog from './products/ProductDialog.js';
import { allProducts } from './products/productsData.js';
import '../styles/ProductsPage.css';

const ProductsPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleRequestProduct = (product) => {
    setSelectedProduct(product);
    // Open request form (you can create another dialog for this)
    alert(`Request form for ${product.title} - Feature coming soon!`);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };

  return (
    <div className="products__page">
      {/* Hero Section */}
      <ProductsHero />

      {/* Products Section */}
      <Container maxWidth="lg" className="products__main-container">
        {/* Category Tabs */}
        <ProductsTabs 
          selectedTab={selectedTab} 
          onTabChange={handleTabChange} 
        />

        {/* Products Grid */}
        <ProductsGrid
          products={allProducts[selectedTab]}
          selectedTab={selectedTab}
          onViewProduct={handleViewProduct}
          onRequestProduct={handleRequestProduct}
        />
      </Container>

      {/* Call to Action Section */}
      <ProductsCTA />

      {/* Product Details Dialog */}
      <ProductDialog
        open={openDialog}
        product={selectedProduct}
        onClose={handleCloseDialog}
        onRequestProduct={handleRequestProduct}
      />
    </div>
  );
};

export default ProductsPage;