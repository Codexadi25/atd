import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  AppBar,
  Toolbar,
  Button,
  Paper,
  useTheme,
  alpha
} from '@mui/material';
import {
  Psychology as AIIcon,
  Web as WebIcon,
  PhoneAndroid as MobileIcon,
  Cloud as CloudIcon,
  Analytics as AnalyticsIcon,
  Build as DevOpsIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Groups as GroupsIcon,
  EmojiEvents as AwardIcon,
  ThumbUp as ThumbUpIcon
} from '@mui/icons-material';
import './AboutPage.css';

const AboutPage = () => {
  const theme = useTheme();
  const heroRef = useRef(null);

  useEffect(() => {
    // Create floating particles animation
    const createParticles = () => {
      const hero = heroRef.current;
      if (!hero) return;

      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 6 + 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        hero.appendChild(particle);
      }
    };

    createParticles();

    return () => {
      if (heroRef.current) {
        const particles = heroRef.current.querySelectorAll('.particle');
        particles.forEach(particle => particle.remove());
      }
    };
  }, []);

  const services = [
    {
      icon: <AIIcon sx={{ fontSize: 40 }} />,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to automate and optimize your business processes with machine learning and deep learning technologies.',
      color: '#FF6B35'
    },
    {
      icon: <WebIcon sx={{ fontSize: 40 }} />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with the latest technologies including React, Node.js, and cloud infrastructure.',
      color: '#4ECDC4'
    },
    {
      icon: <MobileIcon sx={{ fontSize: 40 }} />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences and robust functionality.',
      color: '#45B7D1'
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure solutions using AWS, Google Cloud, and Azure for reliable, secure, and cost-effective operations.',
      color: '#96CEB4'
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics, visualization dashboards, and business intelligence solutions.',
      color: '#FFEAA7'
    },
    {
      icon: <DevOpsIcon sx={{ fontSize: 40 }} />,
      title: 'DevOps Solutions',
      description: 'Streamline your development lifecycle with CI/CD pipelines, containerization, and automated deployment strategies.',
      color: '#DDA0DD'
    }
  ];

  const testimonials = [
    {
      quote: "Aditya Tech & Devoops transformed our startup with their AI-powered solution. Our efficiency increased by 300% and we reduced operational costs significantly.",
      author: "Priya Sharma",
      position: "CEO, TechStart India",
      avatar: "PS",
      rating: 5
    },
    {
      quote: "The team delivered an exceptional e-commerce platform that boosted our online sales by 250%. Their attention to detail and technical expertise is outstanding.",
      author: "Rajesh Kumar",
      position: "Founder, ShopEase",
      avatar: "RK",
      rating: 5
    },
    {
      quote: "Their data analytics dashboard helped us make data-driven decisions that increased our revenue by 180%. Highly recommend their services!",
      author: "Anita Gupta",
      position: "CTO, DataFlow Solutions",
      avatar: "AG",
      rating: 5
    },
    {
      quote: "Outstanding mobile app development! They created a user-friendly app that our customers love. Downloads increased by 400% in just 3 months.",
      author: "Vikram Singh",
      position: "Product Manager, AppVenture",
      avatar: "VS",
      rating: 5
    }
  ];

  const stats = [
    { 
      number: '50+', 
      label: 'Projects Completed',
      icon: <AwardIcon sx={{ fontSize: 30 }} />,
      color: '#FF6B35'
    },
    { 
      number: '25+', 
      label: 'Happy Clients',
      icon: <GroupsIcon sx={{ fontSize: 30 }} />,
      color: '#4ECDC4'
    },
    { 
      number: '3+', 
      label: 'Years Experience',
      icon: <TrendingUpIcon sx={{ fontSize: 30 }} />,
      color: '#45B7D1'
    },
    { 
      number: '99%', 
      label: 'Client Satisfaction',
      icon: <ThumbUpIcon sx={{ fontSize: 30 }} />,
      color: '#96CEB4'
    }
  ];

  return (
    <Box className="about-page">
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
      <Box className="hero" ref={heroRef}>
        <Container maxWidth="lg">
          <Box className="hero-content">
            <Typography variant="h1" className="hero-title">
              Innovating Tomorrow
            </Typography>
            <Typography variant="h5" className="hero-subtitle">
              We are Aditya Tech & Devoops, a cutting-edge technology company specializing in 
              AI-driven solutions, web development, and digital transformation for startups and enterprises.
            </Typography>
            
            {/* Hero Stats */}
            <Grid container spacing={3} className="hero-stats" sx={{ mt: 4 }}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Paper className="hero-stat-card" elevation={3}>
                    <Box className="stat-icon" sx={{ color: stat.color }}>
                      {stat.icon}
                    </Box>
                    <Typography variant="h3" className="stat-number">
                      {stat.number}
                    </Typography>
                    <Typography variant="body2" className="stat-label">
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* What We Do Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" className="section-title" align="center" gutterBottom>
          What We Do
        </Typography>
        <Typography variant="h6" className="section-subtitle" align="center" sx={{ mb: 6, opacity: 0.8 }}>
          We specialize in delivering innovative technology solutions that drive business growth 
          and digital transformation across various industries.
        </Typography>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card className="service-card" elevation={4}>
                <CardContent sx={{ p: 3 }}>
                  <Box 
                    className="service-icon" 
                    sx={{ 
                      backgroundColor: alpha(service.color, 0.1),
                      color: service.color,
                      mb: 2
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: service.color }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.8, lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Client Experiences Section */}
      <Box className="testimonials-section" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title" align="center" gutterBottom>
            Client Experiences
          </Typography>
          <Typography variant="h6" className="section-subtitle" align="center" sx={{ mb: 6, opacity: 0.8 }}>
            Hear from our satisfied clients who have experienced remarkable growth with our solutions.
          </Typography>
          
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card className="testimonial-card" elevation={4}>
                  <CardContent sx={{ p: 3 }}>
                    {/* Rating Stars */}
                    <Box sx={{ mb: 2 }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} sx={{ color: '#FFD700', fontSize: 20 }} />
                      ))}
                    </Box>
                    
                    <Typography variant="body1" className="testimonial-quote" sx={{ mb: 3, fontStyle: 'italic' }}>
                      "{testimonial.quote}"
                    </Typography>
                    
                    <Box className="testimonial-author" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar 
                        className="author-avatar"
                        sx={{ 
                          background: 'linear-gradient(45deg, #4ECDC4, #45B7D1)',
                          width: 50,
                          height: 50
                        }}
                      >
                        {testimonial.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ color: '#4ECDC4' }}>
                          {testimonial.author}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                          {testimonial.position}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Mission Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" className="section-title" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="h6" sx={{ mb: 3, opacity: 0.8, lineHeight: 1.6 }}>
              To empower businesses with cutting-edge technology solutions that drive innovation, 
              efficiency, and sustainable growth in the digital era.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              <Chip label="Innovation" color="primary" variant="outlined" />
              <Chip label="Quality" color="primary" variant="outlined" />
              <Chip label="Excellence" color="primary" variant="outlined" />
              <Chip label="Growth" color="primary" variant="outlined" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className="mission-image" elevation={8} sx={{ p: 4, textAlign: 'center' }}>
              <Box className="mission-visual">
                <AIIcon sx={{ fontSize: 80, color: '#4ECDC4', mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  AI-Powered Future
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8 }}>
                  Leading the digital transformation with artificial intelligence and innovative solutions.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;