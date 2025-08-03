import React from 'react';
import {
  Web as WebIcon,
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  Draw as DrawIcon,
  Business as BusinessIcon,
  WorkspacePremium as WorkspacePremiumIcon,
  School as EducationIcon,
  LocalHospital as HealthIcon,
  Restaurant as RestaurantIcon
} from '@mui/icons-material';
// import DrawIcon from '@mui/icons-material/Draw';

export const websiteTemplates = [
  {
    id: 1,
    title: 'Modern Business Website',
    description: 'Professional corporate website with modern Draw, responsive layout, and powerful features.',
    image: '/api/placeholder/400/250',
    category: 'Business',
    technologies: ['React', 'Material-UI', 'Node.js'],
    features: ['Responsive Draw', 'SEO Optimized', 'Contact Forms', 'Blog Section'],
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
    icon: <WorkspacePremiumIcon />
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
    icon: <DrawIcon />
  }
];

export const dashboardUIs = [
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
    icon: <WorkspacePremiumIcon />
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

export const analyticsBoards = [
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

export const allProducts = [websiteTemplates, dashboardUIs, analyticsBoards];