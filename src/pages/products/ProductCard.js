import React from 'react';
import { 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Chip, 
  Typography, 
  Box, 
  Zoom,
  useTheme 
} from '@mui/material';
import { Visibility as ViewIcon, GetApp as RequestIcon } from '@mui/icons-material';
import './ProductCard.css';

const ProductCard = ({ product, index, onViewProduct, onRequestProduct }) => {
  const theme = useTheme();

  return (
    <Zoom in={true} timeout={500 + index * 100}>
      <Card className="products__card" elevation={4}>
        <div className="products__card-image-container">
          <div 
            className="products__card-image"
            style={{
              height: '200px',
              background: 'linear-gradient(135deg, rgba(0, 51, 170, 0.1), rgba(0, 76, 255, 0.1))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <div className="products__card-icon">
              {product.icon}
            </div>
            <div className="products__card-overlay">
              <Button
                variant="contained"
                startIcon={<ViewIcon />}
                onClick={() => onViewProduct(product)}
                sx={{ 
                  mr: 1,
                  background: 'linear-gradient(45deg, #0033aa, #004cff)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #004cff, #0033aa)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 20px rgba(0, 51, 170, 0.3)'
                  }
                }}
              >
                View
              </Button>
              <Button
                variant="outlined"
                startIcon={<RequestIcon />}
                onClick={() => onRequestProduct(product)}
                sx={{ 
                  color: 'white', 
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: '#00bcd4',
                    color: '#00bcd4',
                    background: 'rgba(0, 188, 212, 0.1)'
                  }
                }}
              >
                Request
              </Button>
            </div>
          </div>
        </div>
        
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
            <Typography variant="h6" component="h3" className="products__card-title">
              {product.title}
            </Typography>
            <Chip 
              label={product.category} 
              size="small" 
              color="primary" 
              variant="outlined"
              className="products__card-chip"
            />
          </Box>
          
          <Typography variant="body2" className="products__card-description" sx={{ mb: 2, opacity: 0.8 }}>
            {product.description}
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ mb: 1, color: '#0033aa', fontWeight: 600 }}>
              Technologies:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {product.technologies.map((tech, index) => (
                <Chip key={index} label={tech} size="small" variant="outlined" className="products__tech-chip" />
              ))}
            </Box>
          </Box>
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ mb: 1, color: '#0033aa', fontWeight: 600 }}>
              Key Features:
            </Typography>
            <ul className="products__features-list">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index}>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        </CardContent>
        
        <CardActions sx={{ justifyContent: 'space-between', px: 3, pb: 3 }}>
          <Typography variant="h6" className="products__card-price">
            {product.price}
          </Typography>
          <Box>
            <Button
              size="small"
              startIcon={<ViewIcon />}
              onClick={() => onViewProduct(product)}
              className="products__preview-btn"
            >
              Preview
            </Button>
            <Button
              size="small"
              variant="contained"
              startIcon={<RequestIcon />}
              onClick={() => onRequestProduct(product)}
              sx={{ ml: 1 }}
              className="products__request-btn"
            >
              Request
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Zoom>
  );
};

export default ProductCard;