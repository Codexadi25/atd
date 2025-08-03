import React from 'react';
import { 
  Grid, 
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
    <Grid item xs={12} sm={6} lg={4}>
      <Zoom in={true} timeout={500 + index * 100}>
        <Card className="products__card" elevation={4}>
          <div className="products__card-image-container">
            <div 
              className="products__card-image"
              style={{
                height: '200px',
                background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
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
                  sx={{ mr: 1 }}
                >
                  View
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<RequestIcon />}
                  onClick={() => onRequestProduct(product)}
                  sx={{ color: 'white', borderColor: 'white' }}
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
              <Typography variant="subtitle2" sx={{ mb: 1, color: theme.palette.primary.main }}>
                Technologies:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {product.technologies.map((tech, index) => (
                  <Chip key={index} label={tech} size="small" variant="outlined" className="products__tech-chip" />
                ))}
              </Box>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, color: theme.palette.primary.main }}>
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
    </Grid>
  );
};

export default ProductCard;