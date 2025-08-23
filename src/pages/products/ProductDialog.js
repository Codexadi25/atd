import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Grid,
  Chip,
  useTheme
} from '@mui/material';
import { GetApp as RequestIcon } from '@mui/icons-material';
import './ProductDialog.css';

const ProductDialog = ({ open, product, onClose, onRequestProduct }) => {
  const theme = useTheme();

  if (!product) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      className="products__dialog"
    >
      <DialogTitle className="products__dialog-title">
        <div className="products__dialog-header">
          <div className="products__dialog-icon">
            {product.icon}
          </div>
          <div className="products__dialog-info">
            <Typography variant="h5" className="products__dialog-product-title">
              {product.title}
            </Typography>
            <Chip 
              label={product.category} 
              size="small" 
              color="primary" 
              className="products__dialog-chip"
            />
          </div>
        </div>
      </DialogTitle>
      
      <DialogContent className="products__dialog-content">
        <div className="products__dialog-image">
          <div
            className="products__dialog-preview"
            style={{
              height: '250px',
              background: 'linear-gradient(135deg, rgba(0, 51, 170, 0.1), rgba(0, 76, 255, 0.1))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              border: '1px solid rgba(0, 51, 170, 0.1)'
            }}
          >
            <div className="products__dialog-large-icon">
              {product.icon}
            </div>
          </div>
        </div>
        
        <Typography variant="body1" className="products__dialog-description">
          {product.description}
        </Typography>
        
        <Grid container spacing={3} className="products__dialog-details">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom className="products__dialog-section-title">
              Technologies Used
            </Typography>
            <div className="products__dialog-tech-chips">
              {product.technologies.map((tech, index) => (
                <Chip 
                  key={index} 
                  label={tech} 
                  variant="outlined" 
                  className="products__dialog-tech-chip"
                />
              ))}
            </div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom className="products__dialog-section-title">
              Key Features
            </Typography>
            <ul className="products__dialog-features">
              {product.features.map((feature, index) => (
                <li key={index}>
                  <Typography variant="body2" className="products__dialog-feature-item">
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
        
        <div className="products__dialog-pricing">
          <Typography variant="h6" className="products__dialog-price-title">
            Price: {product.price}
          </Typography>
          <Typography variant="body2" className="products__dialog-price-note">
            *Price includes source code, documentation, and 3 months of support
          </Typography>
        </div>
      </DialogContent>
      
      <DialogActions className="products__dialog-actions">
        <Button onClick={onClose} className="products__dialog-close-btn">
          Close
        </Button>
        <Button
          variant="contained"
          startIcon={<RequestIcon />}
          onClick={() => onRequestProduct(product)}
          className="products__dialog-request-btn"
        >
          Request This Product
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;