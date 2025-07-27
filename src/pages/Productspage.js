import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Paper,
  useTheme,
  alpha,
  Fade,
  Zoom
} from '@mui/material';
import {
  Web as WebIcon,
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  Visibility as ViewIcon,
  GetApp as RequestIcon,
  Code as CodeIcon,
  Design as DesignIcon,
  Business as BusinessIcon,
  Ecommerce as EcommerceIcon,
  School as EducationIcon,
  LocalHospital as HealthIcon,
  Restaurant as RestaurantIcon
} from '@mui/icons-material';
import '../styles/ProductsPage.css';

const ProductsPage = () => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [requestData, setRequestData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const productCategories = [
    { label: 'Website Templates', value: 0, icon: <WebIcon /> },
    { label: 'Dashboard UI', value: 1, icon: <DashboardIcon /> },
    { label: 'Analytics Boards', value: 2, icon: <AnalyticsIcon /> }
  ];

  const websiteTemplates = [
    {
      id: 1,
      title: 'Modern Business Website',
      description: 'Professional corporate website with modern design, responsive layout, and powerful features.',
      image: '/api/placeholder/400/250',
      category: 'Business',
      technologies: ['React', 'Material-UI', 'Node.js'],
      features: ['Responsive Design', 'SEO Optimized', 'Contact Forms', 'Blog Section'],
      price: '₹25,000',
      icon: <BusinessIcon />
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Complete online store solution with payment integration, inventory management, and admin panel.',
      image: '/api/placeholder/400/250',
      category: 'E-Commerce',
      technologies: ['React', 'Redux', 'MongoDB', 'Stripe'],
      features: ['Payment Gateway', 'Inventory Management', 'User Authentication', 'Order Tracking'],
      price: '₹45,000',
      icon: <EcommerceIcon />
    },
    {
      id: 3,
      title: 'Educational Platform',
      description: 'Learning management system with course creation, student tracking, and interactive features.',
      image: '/api/placeholder/400/250',
      category: 'Education',
      technologies: ['React', 'Firebase', 'Video.js'],
      features: ['Course Management', 'Video Streaming', 'Progress Tracking', 'Certificates'],
      price: '₹35,000',
      icon: <EducationIcon />
    },
    {
      id: 4,
      title: 'Healthcare Portal',
      description: 'Medical practice management system with appointment booking and patient records.',
      image: '/api/placeholder/400/250',
      category: 'Healthcare',
      technologies: ['React', 'Express.js', 'PostgreSQL'],
      features: ['Appointment Booking', 'Patient Records', 'Prescription Management', 'Reports'],
      price: '₹55,000',
      icon: <HealthIcon />
    },
    {
      id: 5,
      title: 'Restaurant Website',
      description: 'Beautiful restaurant website with online ordering, menu management, and reservation system.',
      image: '/api/placeholder/400/250',
      category: 'Restaurant',
      technologies: ['React', 'Strapi', 'Payment API'],
      features: ['Online Ordering', 'Menu Management', 'Table Reservation', 'Reviews'],
      price: '₹30,000',
      icon: <RestaurantIcon />
    },
    {
      id: 6,
      title: 'Portfolio Template',
      description: 'Stunning portfolio website for creatives and professionals to showcase their work.',
      image: '/api/placeholder/400/250',
      category: 'Portfolio',
      technologies: ['React', 'Framer Motion', 'Sanity'],
      features: ['Project Gallery', 'Contact Form', 'Blog', 'Animations'],
      price: '₹20,000',
      icon: <DesignIcon />
    }
  ];

  const dashboardUIs = [
    {
      id: 7,
      title: 'Admin Dashboard Pro',
      description: 'Comprehensive admin dashboard with user management, analytics, and system monitoring.',
      image: '/api/placeholder/400/250',
      category: 'Admin',
      technologies: ['React', 'Material-UI', 'Chart.js'],
      features: ['User Management', 'Real-time Analytics', 'System Monitoring', 'Role-based Access'],
      price: '₹40,000',
      icon: <DashboardIcon />
    },
    {
      id: 8,
      title: 'E-Commerce Dashboard',
      description: 'Complete e-commerce management dashboard with sales tracking and inventory control.',
      image: '/api/placeholder/400/250',
      category: 'E-Commerce',
      technologies: ['React', 'Redux Toolkit', 'D3.js'],
      features: ['Sales Analytics', 'Inventory Control', 'Order Management', 'Customer Insights'],
      price: '₹50,000',
      icon: <EcommerceIcon />
    },
    {
      id: 9,
      title: 'Project Management Dashboard',
      description: 'Powerful project management interface with task tracking, team collaboration, and reporting.',
      image: '/api/placeholder/400/250',
      category: 'Management',
      technologies: ['React', 'TypeScript', 'Socket.io'],
      features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Progress Reports'],
      price: '₹45,000',
      icon: <BusinessIcon />
    },
    {
      id: 10,
      title: 'Financial Dashboard',
      description: 'Financial management dashboard with expense tracking, budgeting, and financial analytics.',
      image: '/api/placeholder/400/250',
      category: 'Finance',
      technologies: ['React', 'Recharts', 'Express.js'],
      features: ['Expense Tracking', 'Budget Planning', 'Financial Reports', 'Investment Tracking'],
      price: '₹60,000',
      icon: <AnalyticsIcon />
    }
  ];

  const analyticsBoards = [
    {
      id: 11,
      title: 'Business Intelligence Board',
      description: 'Advanced analytics board with KPI tracking, data visualization, and predictive insights.',
      image: '/api/placeholder/400/250',
      category: 'Business Intelligence',
      technologies: ['React', 'D3.js', 'Python', 'TensorFlow'],
      features: ['KPI Tracking', 'Predictive Analytics', 'Custom Reports', 'Data Export'],
      price: '₹70,000',
      icon: <AnalyticsIcon />
    },
    {
      id: 12,
      title: 'Marketing Analytics Dashboard',
      description: 'Comprehensive marketing analytics with campaign tracking, ROI analysis, and customer insights.',
      image: '/api/placeholder/400/250',
      category: 'Marketing',
      technologies: ['React', 'Google Analytics API', 'Chart.js'],
      features: ['Campaign Tracking', 'ROI Analysis', 'Social Media Metrics', 'Lead Generation'],
      price: '₹55,000',
      icon: <BusinessIcon />
    },
    {
      id: 13,
      title: 'Sales Performance Board',
      description: 'Sales analytics dashboard with performance metrics, forecasting, and team management.',
      image: '/api/placeholder/400/250',
      category: 'Sales',
      technologies: ['React', 'Plotly.js', 'CRM API'],
      features: ['Performance Metrics', 'Sales Forecasting', 'Team Analytics', 'Customer Pipeline'],
      price: '₹65,000',
      icon: <AnalyticsIcon />
    },
    {
      id: 14,
      title: 'Website Analytics Board',
      description: 'Website performance analytics with traffic analysis, user behavior, and conversion tracking.',
      image: '/api/placeholder/400/250',
      category: 'Web Analytics',
      technologies: ['React', 'Google Analytics', 'Mixpanel'],
      features: ['Traffic Analysis', 'User Behavior', 'Conversion Tracking', 'A/B Testing'],
      price: '₹50,000',
      icon: <WebIcon />
    }
  ];

  const allProducts = [websiteTemplates, dashboardUIs, analyticsBoards];

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

  const ProductCard = ({ product, index }) => (
    <Grid item xs={12} sm={6} lg={4} key={product.id}>
      <Zoom in={true} timeout={500 + index * 100}>
        <Card className="product-card" elevation={4}>
          <Box className="product-image-container">
            <CardMedia
              component="div"
              className="product-image"
              sx={{
                height: 200,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <Box className="product-icon">
                {product.icon}
              </Box>
              <Box className="product-overlay">
                <Button
                  variant="contained"
                  startIcon={<ViewIcon />}
                  onClick={() => handleViewProduct(product)}
                  sx={{ mr: 1 }}
                >
                  View
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<RequestIcon />}
                  onClick={() => handleRequestProduct(product)}
                  sx={{ color: 'white', borderColor: 'white' }}
                >
                  Request
                </Button>
              </Box>
            </CardMedia>
          </Box>
          
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
              <Typography variant="h6" component="h3" className="product-title">
                {product.title}
              </Typography>
              <Chip 
                label={product.category} 
                size="small" 
                color="primary" 
                variant="outlined"
              />
            </Box>
            
            <Typography variant="body2" className="product-description" sx={{ mb: 2, opacity: 0.8 }}>
              {product.description}
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, color: theme.palette.primary.main }}>
                Technologies:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {product.technologies.map((tech, index) => (
                  <Chip key={index} label={tech} size="small" variant="outlined" />
                ))}
              </Box>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, color: theme.palette.primary.main }}>
                Key Features:
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {product.features.slice(0, 3).map((feature, index) => (
                  <Typography key={index} component="li" variant="body2" sx={{ opacity: 0.8 }}>
                    {feature}
                  </Typography>
                ))}
              </Box>
            </Box>
          </CardContent>
          
          <CardActions sx={{ justifyContent: 'space-between', px: 3, pb: 3 }}>
            <Typography variant="h6" className="product-price">
              {product.price}
            </Typography>
            <Box>
              <Button
                size="small"
                startIcon={<ViewIcon />}
                onClick={() => handleViewProduct(product)}
              >
                Preview
              </Button>
              <Button
                size="small"
                variant="contained"
                startIcon={<RequestIcon />}
                onClick={() => handleRequestProduct(product)}
                sx={{ ml: 1 }}
              >
                Request
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Zoom>
    </Grid>
  );

  return (
    <Box className="products-page">
      {/* Navigation */}
      <AppBar position="fixed" className="navbar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="logo">
            Aditya Tech & Devoops
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" href="#home">Home</Button>
            <Button color="inherit" href="#about">About</Button>
            <Button color="inherit" href="#services">Services</Button>
            <Button color="inherit" href="#products">Products</Button>
            <Button color="inherit" href="#contact">Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Fade in={true} timeout={1000}>
            <Box className="hero-content">
              <Typography variant="h1" className="hero-title">
                Our Products
              </Typography>
              <Typography variant="h5" className="hero-subtitle">
                Discover our collection of premium website templates, dashboard UIs, and analytics boards 
                designed to accelerate your digital projects.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Products Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Category Tabs */}
        <Paper className="tabs-container" elevation={4}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            centered
            variant="fullWidth"
            className="category-tabs"
          >
            {productCategories.map((category, index) => (
              <Tab
                key={index}
                label={category.label}
                icon={category.icon}
                iconPosition="start"
                className="category-tab"
              />
            ))}
          </Tabs>
        </Paper>

        {/* Products Grid */}
        <Box sx={{ mt: 6 }}>
          <Fade in={true} timeout={800} key={selectedTab}>
            <Grid container spacing={4}>
              {allProducts[selectedTab].map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </Grid>
          </Fade>
        </Box>
      </Container>

      {/* Call to Action Section */}
      <Box className="cta-section">
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom className="cta-title">
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 4, opacity: 0.9 }}>
            Choose from our premium collection or request a custom solution tailored to your needs.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<RequestIcon />}
              className="cta-button"
            >
              Request Custom Design
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<CodeIcon />}
              sx={{ color: 'white', borderColor: 'white' }}
            >
              View All Templates
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Product Details Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        className="product-dialog"
      >
        {selectedProduct && (
          <>
            <DialogTitle sx={{ pb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {selectedProduct.icon}
                <Box>
                  <Typography variant="h5">{selectedProduct.title}</Typography>
                  <Chip label={selectedProduct.category} size="small" color="primary" />
                </Box>
              </Box>
            </DialogTitle>
            
            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    height: 250,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3
                  }}
                >
                  <Box sx={{ fontSize: 80, opacity: 0.7 }}>
                    {selectedProduct.icon}
                  </Box>
                </Box>
              </Box>
              
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                {selectedProduct.description}
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom color="primary">
                    Technologies Used
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {selectedProduct.technologies.map((tech, index) => (
                      <Chip key={index} label={tech} variant="outlined" />
                    ))}
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom color="primary">
                    Key Features
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {selectedProduct.features.map((feature, index) => (
                      <Typography key={index} component="li" variant="body2" sx={{ mb: 0.5 }}>
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
              </Grid>
              
              <Box sx={{ mt: 3, p: 2, bgcolor: 'action.hover', borderRadius: 2 }}>
                <Typography variant="h6" color="primary" gutterBottom>
                  Price: {selectedProduct.price}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  *Price includes source code, documentation, and 3 months of support
                </Typography>
              </Box>
            </DialogContent>
            
            <DialogActions sx={{ p: 3 }}>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button
                variant="contained"
                startIcon={<RequestIcon />}
                onClick={() => handleRequestProduct(selectedProduct)}
              >
                Request This Product
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ProductsPage;