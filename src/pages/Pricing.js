import React, { useState } from 'react';
import { Star, Check, ArrowRight, Headphones } from 'lucide-react';
import '../styles/Pricings.css';

const Pricings = () => {
  const [activePlan, setActivePlan] = useState('professional');

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '₹29,999',
      period: '/project',
      description: 'Perfect for small businesses and startups',
      popular: false,
      features: [
        'Responsive Web Application',
        'Modern UI/UX Design',
        'Basic SEO Optimization',
        'Mobile-First Approach',
        '30 Days Support',
        'Source Code Included',
        'Basic Analytics Setup',
        '3 Revision Rounds'
      ],
      deliverables: [
        'Landing Page + 3 Additional Pages',
        'Contact Form Integration',
        'Social Media Integration',
        'Basic Performance Optimization'
      ]
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '₹69,999',
      period: '/project',
      description: 'Ideal for growing businesses with advanced needs',
      popular: true,
      features: [
        'Full-Stack Web Application',
        'Custom Backend Development',
        'Database Design & Integration',
        'Advanced SEO & Analytics',
        '90 Days Support',
        'API Development',
        'Admin Dashboard',
        'Unlimited Revisions',
        'Performance Optimization',
        'Security Implementation'
      ],
      deliverables: [
        'Up to 10 Pages/Screens',
        'User Authentication System',
        'Content Management System',
        'Payment Gateway Integration',
        'Email Automation Setup'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '₹1,99,999',
      period: '/project',
      description: 'Comprehensive solution for large organizations',
      popular: false,
      features: [
        'Enterprise-Grade Architecture',
        'Microservices Development',
        'AI/ML Integration',
        'Cloud Infrastructure Setup',
        '1 Year Support & Maintenance',
        'DevOps Pipeline Setup',
        'Multi-Platform Development',
        'Custom Integrations',
        'Load Balancing & Scaling',
        'Advanced Security Audits',
        '24/7 Monitoring',
        'Team Training Included'
      ],
      deliverables: [
        'Unlimited Pages/Features',
        'Multi-Role User Management',
        'Advanced Analytics Dashboard',
        'Third-Party Integrations',
        'Mobile App Development',
        'Custom AI Solutions'
      ]
    }
  ];

  return (
    <div className="pricings-container">
      <div className="pricings-wrapper">
        {/* Pricing Header */}
        <div className="pricings-header">
          <div className="header-content">
            <div className="header-icon">
              <Star className="w-8 h-8" />
            </div>
            <h2 className="main-title">Pricing Plans</h2>
          </div>
          <p className="header-description">
            Choose the perfect plan for your business needs. All plans include our expertise and commitment to excellence.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.popular ? 'popular' : ''} ${activePlan === plan.id ? 'selected' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <div className="badge-content">Most Popular</div>
                </div>
              )}

              <div className="card-content">
                {/* Plan Header */}
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                  <div className="price-container">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="features-section">
                  <h4 className="section-title">Features Included:</h4>
                  <ul className="features-list">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <Check className="check-icon" />
                        <span className="feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="deliverables-section">
                  <h4 className="section-title">Key Deliverables:</h4>
                  <ul className="deliverables-list">
                    {plan.deliverables.map((deliverable, index) => (
                      <li key={index} className="deliverable-item">
                        <ArrowRight className="arrow-icon" />
                        <span className="deliverable-text">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button 
                  className={`cta-button ${plan.popular ? 'primary' : 'secondary'}`}
                  onClick={() => setActivePlan(plan.id)}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <div className="contact-card">
            <div className="contact-header">
              <Headphones className="contact-icon" />
              <h3 className="contact-title">Need a Custom Solution?</h3>
            </div>
            <p className="contact-description">
              Have specific requirements? Our team is ready to create a tailored solution that perfectly fits your business needs and budget.
            </p>
            <div className="contact-buttons">
              <button className="contact-btn primary">
                Schedule Consultation
              </button>
              <button className="contact-btn secondary">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricings;